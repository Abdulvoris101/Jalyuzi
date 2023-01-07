from .models import *
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers


class ValuteSerializer(ModelSerializer):
    class Meta:
        model = ValuteExchange
        fields = ['valute']

class CategorySerializer(ModelSerializer):
    products = serializers.StringRelatedField(many=True)
    subcategories = serializers.StringRelatedField(many=True)
    
    class Meta:
        model = Category
        fields = ['id', 'name', 'image', 'products', 'subcategories']

class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
    
class ColorSerializer(ModelSerializer):

    class Meta:
        model = Color
        fields = '__all__'
    
class CatalogSerializer(ModelSerializer):
    class Meta:
        model = Catalog
        fields = '__all__'

class PropertySerializer(ModelSerializer):
    class Meta:
        model = Property
        fields = '__all__'

class SubCategorySerializer(ModelSerializer):
    class Meta:
        model = SubCategory
        fields =  '__all__'

class AchievementSerializer(ModelSerializer):
    class Meta:
        model = Achievement
        fields = '__all__'

class ContactSerializer(ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

class FabricTypeSerializer(ModelSerializer):
    class Meta:
        model = FabricType
        fields = '__all__'