from django.contrib import admin
from .models import Order

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('user', 'product', 'status', 'overall_price')
    list_display_links = ('user', 'product' )
    list_editable = ('status',)
    list_filter = ('user', )

