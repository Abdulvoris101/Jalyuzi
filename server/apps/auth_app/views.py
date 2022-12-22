from multiprocessing import AuthenticationError
from django.shortcuts import get_object_or_404, render
from requests import delete
from .serializers import UserSerializer
from rest_framework.views import APIView
from .models import CustomUser
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth import login, authenticate
from django.contrib.auth.models import User
from random import randint
from twilio.rest import Client
from django.contrib.auth import logout

import os

from django.contrib.auth.hashers import check_password


def send_code(body, phone_number):
    account_sid = 'AC4bd96c3befa553a87e6c089ff79c643f'
    auth_token = 'd29a6a9dfbc44861775fbc2489066636'

    client = Client(account_sid, auth_token)

    message = client.messages.create(
        body=body,
        from_='+14256005103',
        to=f'+998{phone_number}'
    )

    print(message.sid)





class UserVerification(APIView):
    def post(self, request):
        confirm = request.data['confirm']
        phone_number = request.data['phone_number']
        password = request.data['password']

        user_s = CustomUser.objects.filter(username=phone_number).exists()

        if user_s:
            user = CustomUser.objects.get(username=phone_number)

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
                    'firstConfirm': user.first_confirm
                })

                user_cookie = request.COOKIES.get('user_token') 

                if user_cookie == token.key:
                    return response
                
                response.set_cookie('user_token', token.key)

                return response
                

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

        if deleted:
            return Response({'Deleted': True})
        
        users = CustomUser.objects.all()
        serializer = UserSerializer(users, many=True)

        return Response(serializer.data)

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

                    send_code(f"{user.confirm} - Vash kod dlya registratsii na sayte Jalyuzi.uz", username)

                    return Response({
                        'Send Verification': 'Waiting...',
                        'firstConfirm': user.first_confirm,
                        'username': user.username
                    })
                
                return Response({
                    'error': 'Введите верную инфо'
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
                'first_name': user.first_name
            })

            user_cookie = request.COOKIES.get('user_token') 
            
            if user_cookie == token.key:
                return response
            
            response.set_cookie('user_token', token.key)
            return response

        
        return Response({
            'password': "Not correct"
        })

class UserLogout(APIView):
    def get(self, request):
        logout(request)

        return Response({'Logout': True})
    
        

class UserMe(APIView):
    def get(self, request):
        
        if str(request.user) != 'AnonymousUser':
            user = CustomUser.objects.get(username=request.user.username)
            serializer = UserSerializer(user)
            return Response(serializer.data)
        else:
            return Response({'You didn\'t login'}, status=status.HTTP_400_BAD_REQUEST)


    

    def delete(self, request):
        user = request.user

        user_obj = CustomUser.objects.get(user=user)
        user_obj.delete()

        return Response({'Deleted': True})

    

        
    

