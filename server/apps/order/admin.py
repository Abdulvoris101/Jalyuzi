from django.contrib import admin
from .models import Order, Address

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'client', 'product', 'status', 'amount', 'overall_price', 'created_at')
    list_display_links = ('id', 'client', 'product', 'status', )
    list_filter = ('id', 'status', 'client', 'product'  )


@admin.register(Address)
class AddresAdmin(admin.ModelAdmin):
    list_display = ('user', 'city', 'state', 'address')
    list_display_links = ('user', 'city')