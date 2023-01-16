from multiprocessing import AuthenticationError
from django.shortcuts import get_object_or_404, render
from requests import delete
from .serializers import UserSerializer, ChangePasswordSerializer
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, DestroyAPIView, UpdateAPIView
from .models import CustomUser
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth import login, authenticate
from django.contrib.auth.models import User
from random import randint
from twilio.rest import Client
from django.contrib.auth import logout
from rest_framework.authtoken.models import Token
import os
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.authentication import TokenAuthentication, SessionAuthentication

from django.contrib.auth.hashers import check_password, make_password


def send_code(body, phone_number):
    account_sid = 'AC4bd96c3befa553a87e6c089ff79c643f'
    auth_token = 'd29a6a9dfbc44861775fbc2489066636'

    client = Client(account_sid, auth_token)

    message = client.messages.create(
        body=body,
        from_='+14256005103',
        to=f'+998{phone_number}'
    )



class SendToResetPassword(APIView):
    def post(self, request):
        phone_number = request.data.get('phone_number')
        user = CustomUser.objects.filter(username=phone_number).exists()

        if user:
            user = CustomUser.objects.get(username=phone_number)
            user.confirm = randint(10000, 99999)
            user.save()

            send_code(f"{user.confirm} - Vash kod dlya sbrosa parola na sayte Jalyuzi.uz", phone_number)

            return Response({'code': 'sent', 'ok': True, 'user': user.username}, status=status.HTTP_200_OK)
        
        return Response({'detail': 'User doesnt exists!', 'ok': False}, status=status.HTTP_400_BAD_REQUEST)


class ResetPassword(APIView):
    def post(self, request):
        confirm_code = request.data.get('confirm_code')
        username = request.data.get('phone_number')

        user = CustomUser.objects.get(username=username)
        
        if int(confirm_code) == user.confirm:
            user.password = make_password(str(user.confirm))
            user.save()

            return Response({'detail': f'Success! Your password is {str(user.confirm)}', 'ok': True}, status=status.HTTP_200_OK)

        return Response({'detail': 'Inccorect confirm code', 'ok': False}, status=status.HTTP_400_BAD_REQUEST)


class UserVerification(APIView):
    def post(self, request):
        confirm = request.data['confirm']
        phone_number = request.data['phone_number']
        password = request.data['password']

        user_s = CustomUser.objects.filter(username=phone_number).exists()

        if user_s:
            user = CustomUser.objects.get(username=phone_number)
            if str(confirm).isdigit():
                if user.confirm == int(confirm):

                    token, created = Token.objects.get_or_create(user=user)
                    
                    user.confirm = randint(10000, 99999)
                    user.first_confirm = True
                    user.save()

                    user = authenticate(request, username=phone_number, password=password)

                    login(request, user)

                    response =  Response({
                        'token': token.key,
                        'user_id': user.id,
                        'firstConfirm': user.first_confirm,
                        'ok': True
                    })

                    user_cookie = request.COOKIES.get('user_token') 

                    if user_cookie == token.key:
                        return response
                    
                    response.set_cookie('user_token', token.key)

                    return response

                return Response({"Error": "Введено код не является числом!"})

            else:
                return Response({'Error': 'Неверный код!'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'Wrong': True})
                

         





class UserRegisterView(APIView):

    def get_queryset(self, request):
        delete_user = request.query_params.get('delete')
        

        if delete_user is not None and delete_user != '':
            user = CustomUser.objects.get(username=delete_user)
            user.delete()
            return True
        


    def get(self, request, format=None):
        deleted = self.get_queryset(request)
        admin = CustomUser.objects.get(username="admin")
        telegram_id = request.query_params.get('telegram_id')
        
        if telegram_id:
            user = get_object_or_404(CustomUser, telegram_id=telegram_id)
            serializer = UserSerializer(user)

            return Response(serializer.data)
            
        if admin == request.user:    
            if deleted:
                return Response({'Deleted': True})
            
            users = CustomUser.objects.all()
            serializer = UserSerializer(users, many=True)

            return Response(serializer.data)
        
 
        return Response({"detail": "You do'nt have permissons"})

    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        username = request.data['phone_number']

        findUser = CustomUser.objects.filter(username=username).exists()


        if serializer.is_valid():
            if findUser == False:

                serializer.save()

                user = CustomUser.objects.get(username=username)
                

                user = authenticate(username = username, password = serializer.validated_data['password'])
                

                if user is not None:
                    user.confirm = randint(10000, 99999)
                    user.save()

                    send_code(f"{user.confirm} - Vash kod dlya registratsii na sayte Jalyuzi.uz ili na bote @jalyuziuzbot", username)

                    return Response({
                        'Send Verification': 'Waiting...',
                        'firstConfirm': user.first_confirm,
                        'username': user.username,
                        'ok': True
                    }, status=status.HTTP_200_OK)
                

                return Response({
                    'Error': 'Введите верную инфо'
                }, status=status.HTTP_400_BAD_REQUEST)
                    

            
            return Response({'Error': 'User Allready exist', 'Error_Code': 5}, status=status.HTTP_400_BAD_REQUEST)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class UserLoginView(APIView):
    def post(self, request):
        phone_number = request.data['phone_number']
        password = request.data['password']

        user = CustomUser.objects.filter(username=phone_number).first()

        if user is None:
            raise AuthenticationError
        
        user = CustomUser.objects.get(username=phone_number)

        check = check_password(password, user.password)

        if check:
            token, created = Token.objects.get_or_create(user=user)

            user = authenticate(username = phone_number, password = password)
            login(request, user)

            response =  Response({
                'token': token.key,
                'user_id': user.id,
                'first_name': user.first_name,
                'phone_number': user.phone_number,
                'ok': True
            },status=status.HTTP_200_OK)

            user_cookie = request.COOKIES.get('user_token') 
            
            if user_cookie == token.key:
                return response
            
            response.set_cookie('user_token', token.key)
            return response

        
        return Response({
            'detail': "Password not correct"
        },status=status.HTTP_400_BAD_REQUEST)

class UserLogout(APIView):
    def get(self, request):
        logout(request)

        return Response({'Logout': True})
    
        

class UserMe(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    authentication_classes = [TokenAuthentication, SessionAuthentication]

    def get(self, request):
        user = get_object_or_404(CustomUser, username=request.user.username)

        serializer = UserSerializer(user)
        
        return Response(serializer.data, status=status.HTTP_200_OK)


    def put(self, request):
        first_name = request.data.get("first_name")
        last_name = request.data.get("last_name")

        user = get_object_or_404(CustomUser, username=request.user.username)

        user.first_name = first_name
        user.last_name = last_name
        user.save()

        return Response({"ok": True}, status=status.HTTP_200_OK)


    def delete(self, request):
        user = request.user

        user_obj = CustomUser.objects.get(user=user)
        user_obj.delete()

        return Response({'Deleted': True})

    

        
class SendVerificationView(APIView):
    def post(self, request):
        telegram_id = request.data.get("telegram_id")

        user = get_object_or_404(CustomUser, telegram_id=telegram_id)

        user.confirm = randint(10000, 99999)
        user.save()

        send_code(f"1 - Vash kod dlya registratsii na sayte Jalyuzi.uz ili na bote @jalyuziuzbot", user.username)

        return Response({
            'Verification': 'Waiting....',
            'ok': True
        }, status=status.HTTP_200_OK)
        


