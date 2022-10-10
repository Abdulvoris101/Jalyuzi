from .models import *
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers


class CategorySerializer(ModelSerializer):
    products = serializers.StringRelatedField(many=True)

    class Meta:
        model = Category
        fields = ['name', 'image', 'products']

class ProductSerializer(ModelSerializer):
    
    class Meta:
        model = Product
        fields = '__all__'