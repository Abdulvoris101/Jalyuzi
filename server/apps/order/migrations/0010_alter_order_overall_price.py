# Generated by Django 4.1.2 on 2022-11-25 12:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0009_remove_order_order_order_address_order_amount_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='overall_price',
            field=models.CharField(max_length=255, verbose_name='Обшая цена'),
        ),
    ]
