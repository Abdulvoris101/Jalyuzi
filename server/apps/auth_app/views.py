from multiprocessing import AuthenticationError
from django.shortcuts import get_object_or_404, render
from .serializers import UserSerializer
from rest_framework.views import APIView
from .models import CustomUser
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth import login, authenticate

from django.contrib.auth.hashers import check_password

class UserRegisterView(APIView):
    def get(self, request, format=None):
        users = CustomUser.objects.all()
        serializer = UserSerializer(users, many=True)

        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLoginView(APIView):
    def post(self, request):
        username = request.data['username']
        password = request.data['password']

        user = CustomUser.objects.filter(username=username).first()
        
        if user is None:
            raise AuthenticationError
        
        user = CustomUser.objects.get(username=username)

        check = check_password(password, user.password)

        if check:
            token, created = Token.objects.get_or_create(user=user)

            user = authenticate(username = username, password = password)
            login(request, user)

            return Response({
                'token': token.key,
                'user_id': user.id,

            })
        
        return Response({
            'password': "Not correct"
        })

class UserMe(APIView):
    def get(self, request):
        my_user = get_object_or_404(CustomUser, username=request.user.username)
        serializer = UserSerializer(my_user)

        return Response(serializer.data)