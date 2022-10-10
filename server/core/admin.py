from django.contrib import admin
from .models import Category, SubCategory, Product, Catalog, Property, Color, FabricType
from django.utils.safestring import mark_safe

admin.site.register(SubCategory)
admin.site.register(Catalog)
admin.site.register(Property)
admin.site.register(Color)
admin.site.register(FabricType)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('get_image', 'name', 'weight', 'count', 'price')
    list_display_links = ('get_image', 'name', 'weight', 'count', 'price')
    prepopulated_fields = {'model': ('name',),}

    def get_image(self, obj):
        
        return mark_safe(f'<img src="/media/{obj.image}" width="50" height="60" />')

    get_image.short_description = "Изображения"

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('get_image', 'name' )
    list_display_links = ('get_image', 'name')


    def get_image(self, obj):
        
        return mark_safe(f'<img src="/media/{obj.image}" width="50" height="60" />')

    get_image.short_description = "Изображения"