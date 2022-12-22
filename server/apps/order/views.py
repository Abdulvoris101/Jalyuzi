from django.shortcuts import render
from .serializers import OrderSerializer, AddressSerializer
from .models import Order, Address
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from rest_framework.authentication import BasicAuthentication, SessionAuthentication, TokenAuthentication
from apps.core.permissions import IsAdminUserOrReadOnly
from rest_framework.response import Response
from rest_framework import status

class OrderView(ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    authentication_classes = [BasicAuthentication, SessionAuthentication, TokenAuthentication]

    
    def create(self, request, *args, **kwargs):
         data = request.data
         
         serializer = OrderSerializer(data=data, many=True)
         serializer.is_valid(raise_exception=True)
         serializer.save(client=self.request.user)

         return Response(serializer.data, status=status.HTTP_201_CREATED)



class OrderDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [IsAdminUserOrReadOnly]
    authentication_classes = [BasicAuthentication, SessionAuthentication, TokenAuthentication]

class AddressView(ListCreateAPIView):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer

    permission_classes = [IsAuthenticatedOrReadOnly]
    authentication_classes = [BasicAuthentication, SessionAuthentication, TokenAuthentication]

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = Address.objects.filter(user=self.request.user)
        serializer = AddressSerializer(queryset, many=True)
        return Response(serializer.data)


    def perform_create(self, serializer):
        print(self.request.user)
        serializer.save(user=self.request.user)