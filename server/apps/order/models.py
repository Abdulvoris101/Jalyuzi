from random import choices
from tabnanny import verbose
from django.db import models
from apps.core.models import Product
from apps.auth_app.models import CustomUser
from ..auth_app.views import send_code


STATUS_CHOICES = (
    ("pending", "pending"),
    ("canceled", "canceled"),
    ("sold", "sold"),
)

class Address(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, verbose_name='addresses')
    city = models.CharField('Shaxar', max_length=100)
    state = models.CharField('Tuman', max_length=122)
    address = models.CharField('Maxalla, Uy', max_length=255)

    class Meta:
        verbose_name = 'Аддрес'
        verbose_name_plural = 'Аддресы'

    def __str__(self):
        return f"{self.user}-{self.city}"



class Order(models.Model):
    client = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='orders', verbose_name='Клиент')
    product = models.ForeignKey(Product, related_name='orders', verbose_name='Продукт', on_delete=models.CASCADE)
    product_price = models.CharField('Цена за продукта', max_length=255)
    overall_price = models.CharField('Обшая цена', max_length=255)
    size = models.CharField('Общ.кв', max_length=100)
    type_id = models.CharField('Цвето коррекция', max_length=255)
    status = models.CharField(max_length=8, choices=STATUS_CHOICES, verbose_name='Статус')
    address = models.ForeignKey(Address, on_delete=models.CASCADE, related_name='orders', verbose_name='Адресс')
    amount = models.BigIntegerField(verbose_name='Количество')
    created_at = models.DateTimeField(verbose_name='Дата', auto_now_add=True)

    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'


    def save(self, *args, **kwargs):
        send_code(f'У вас новые заказы от {self.client.username}, Ордер Id: {self.product.id}, Общ сумма заказа {self.overall_price} сум', '909174227')
        send_code(f'У вас новые заказы от {self.client.username}, Ордер Id: {self.product.id}, Общ сумма заказа {self.overall_price} сум', '909940000')
        
        super(Order, self).save(*args, **kwargs)