from .models import Order
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
# from rest_framework.

class OrderSerializer(ModelSerializer):
    user = serializers.CharField(source="user.username", read_only=True)

    class Meta:
        model = Order
        fields = '__all__'
        
