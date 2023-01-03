from requests import Response
from .models import CustomUser
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers

class UserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'first_name', 'last_name', 'first_confirm', 'phone_number', 'password']
        
        extra_kwargs = {
            'phone_number': {'required': True},
            'first_name': {'required': True},
            'username': {'required': False},
            'last_name': {'required': True},
            "password": {"write_only": True}
        }


    def create(self, validated_data):
        username = validated_data['phone_number']
        
        
        new_username = validated_data['phone_number']
        
        user = CustomUser.objects.create(
            username=new_username,
            phone_number=validated_data['phone_number'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )

        user.set_password(validated_data['password'])
        user.save()

        return user



class ChangePasswordSerializer(serializers.Serializer):
    model = CustomUser
    phone_number = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)

    
    