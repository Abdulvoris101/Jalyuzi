from random import choices
from tabnanny import verbose
from django.db import models
from apps.core.models import Product
from apps.auth_app.models import CustomUser


STATUS_CHOICES = (
    ("pending", "pending"),
    ("canceled", "canceled"),
    ("sold", "sold"),
)

class Order(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='orders', verbose_name='Пользователь')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='orders', verbose_name='Продукт')
    overall_price = models.BigIntegerField('Обшая цена')
    status = models.CharField(max_length=8, choices=STATUS_CHOICES, verbose_name='Статус')
