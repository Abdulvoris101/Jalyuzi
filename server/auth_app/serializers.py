from .models import CustomUser
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers


class UserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'first_name', 'last_name', 'phone_number', 'password']
        
        extra_kwargs = {
            'phone_number': {'required': True},
            "password": {"write_only": True}
        }


    def create(self, validated_data):
        user = CustomUser.objects.create(
            username=validated_data['username'],
            phone_number=validated_data['phone_number'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )

        user.set_password(validated_data['password'])
        user.save()

        return user

