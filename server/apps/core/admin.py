from django.contrib import admin
from .models import Category, SubCategory, Product, Catalog, Property, Color, FabricType, Achievement, Contact
from django.utils.safestring import mark_safe

admin.site.register(Achievement)
admin.site.register(Catalog)
admin.site.register(Property)
admin.site.register(Color)
admin.site.register(FabricType)
admin.site.register(Contact)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('get_image', 'name', 'category', 'subcategory', 'weight', 'count', 'status', 'price')
    list_display_links = ('get_image', 'name', 'weight', 'count', 'price')
    prepopulated_fields = {'model': ('name',),}
    search_fields = ('name', 'count')
    list_filter = ('category', 'subcategory', 'catalog')
    list_editable = ('status', )

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

@admin.register(SubCategory)
class SubCategoryAdmin(admin.ModelAdmin):
    list_display = ('get_image', 'name' )
    list_display_links = ('get_image', 'name')


    def get_image(self, obj):
        
        return mark_safe(f'<img src="/media/{obj.image}" width="50" height="60" />')

    get_image.short_description = "Изображения"