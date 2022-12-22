from django.shortcuts import render
from .serializers import CategorySerializer, AchievementSerializer, ContactSerializer, ProductSerializer, ColorSerializer, SubCategorySerializer, PropertySerializer, CatalogSerializer
3
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Category, Product, Color, Property, Catalog , SubCategory, Contact, Achievement
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser
from rest_framework.authentication import TokenAuthentication, BasicAuthentication, SessionAuthentication
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.response import Response
from django.db.models import Q
from .permissions import IsAdminUserOrReadOnly


class AchievementView(ListCreateAPIView):
    queryset = Achievement.objects.filter(id=1)
    serializer_class = AchievementSerializer

    permission_classes = [IsAdminUserOrReadOnly]
    authentication_classes = [BasicAuthentication, TokenAuthentication, SessionAuthentication]

class ContactView(ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    permission_classes = [IsAuthenticatedOrReadOnly]
    authentication_classes = [BasicAuthentication, TokenAuthentication, SessionAuthentication]

class SubCategoryDetailView(RetrieveUpdateDestroyAPIView):
    queryset = SubCategory.objects.all()
    serializer_class = SubCategorySerializer

    permission_classes = [IsAdminUserOrReadOnly]
    authentication_classes = [BasicAuthentication, TokenAuthentication, SessionAuthentication]

class SubCategoryView(ListCreateAPIView):
    queryset = SubCategory.objects.all()
    serializer_class = SubCategorySerializer

    permission_classes = [IsAdminUserOrReadOnly]
    authentication_classes = [BasicAuthentication, TokenAuthentication, SessionAuthentication]


class CategoryView(ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    permission_classes = [IsAuthenticatedOrReadOnly]
    authentication_classes = [BasicAuthentication, TokenAuthentication, SessionAuthentication]

class ProductView(ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    authentication_classes = [BasicAuthentication, TokenAuthentication, SessionAuthentication]
    # filter_backends = [django_filters.rest_framework.DjangoFilterBackend]


    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        products = Product.objects.all()

        print(self.request.GET)

        if len(self.request.GET) >= 1:
            serializer = ProductSerializer(queryset, many=True)
        else:
            serializer = ProductSerializer(products, many=True)
        
        return Response(serializer.data)


    def get_queryset(self):
        query_color = self.request.GET.get('color')
        query_category = self.request.GET.get('category')
        query_subcategory = self.request.GET.get('subcategory')
        query_property = self.request.GET.get('property')
        query_catalog = self.request.GET.get('catalog')

        
        products = []

        if query_category:
            products = Product.objects.filter(category__id=query_category)
        elif query_subcategory:
            products = Product.objects.filter(subcategory__id=query_subcategory)
        else:
            products = Product.objects.all()
        
        

        if query_catalog:
            catalog = query_catalog.split(',')
            products = products.filter(catalog__in=catalog)

        if query_color:
            color = query_color.split(',')
            products = products.filter(color__in=color)

        if query_property:
            properti = query_property.split(',')
            products = products.filter(property__in=properti)
      


        return products
            


        


class ProductDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAdminUserOrReadOnly]
    authentication_classes = [TokenAuthentication, SessionAuthentication]

class CategoryDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    permission_classes = [IsAdminUserOrReadOnly]
    authentication_classes = [BasicAuthentication, TokenAuthentication, SessionAuthentication]

class ColorView(ListCreateAPIView):
    queryset = Color.objects.all()
    serializer_class = ColorSerializer

class PropertyView(ListCreateAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer

class CatalogView(ListCreateAPIView):
    queryset = Catalog.objects.all()
    serializer_class = CatalogSerializer

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        subcategory = request.GET.get('subcategory')
        category = request.GET.get('category')
        objs = Catalog.objects.all()

        if subcategory:
            queryset = Catalog.objects.all()[6:]
            serializer = CatalogSerializer(queryset, many=True)
            return Response(serializer.data)        
        elif category:
            queryset = Catalog.objects.all()[:6]
            serializer = CatalogSerializer(queryset, many=True)
            return Response(serializer.data)        

        serializer = CatalogSerializer(objs, many=True)
        return Response(serializer.data)

