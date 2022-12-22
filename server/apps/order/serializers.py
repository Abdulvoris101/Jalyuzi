from .models import Order, Address
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
# from rest_framework.

class OrderSerializer(ModelSerializer):
    client = serializers.CharField(source="client.username", read_only=True)
    # product = serializers.HyperlinkedIdentityField(view_name='product_detail', format='html')

    class Meta:
        model = Order
        fields = '__all__'
        

class AddressSerializer(ModelSerializer):
    user = serializers.CharField(source="user.username", read_only=True)
    class Meta:
        model = Address
        fields = '__all__'

