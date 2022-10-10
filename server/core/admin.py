from django.contrib import admin
from .models import Category, SubCategory, Product, Catalog, Property, Color, FabricType

admin.site.register(Category)
admin.site.register(SubCategory)
admin.site.register(Product)
admin.site.register(Catalog)
admin.site.register(Property)
admin.site.register(Color)
admin.site.register(FabricType)

