from random import choices
from tabnanny import verbose
from django.db import models
from apps.core.models import Product
from apps.auth_app.models import CustomUser
from twilio.rest import Client



def send_code(body, phone_number):
    account_sid = 'AC4bd96c3befa553a87e6c089ff79c643f'
    auth_token = 'd29a6a9dfbc44861775fbc2489066636'

    client = Client(account_sid, auth_token)

    message = client.messages.create(
        body=body,
        from_='+14256005103',
        to=f'+998{phone_number}'
    )


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
        return self.city



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
        # send_code(f'У вас новые заказы от {self.client.username}, Общ сумма заказа {self.overall_price} сум', '909174227')
        
        super(Order, self).save(*args, **kwargs)