# Generated by Django 4.1.2 on 2022-11-22 15:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0003_remove_order_user_order_client_order_created_at'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='order',
            options={'verbose_name': 'Заказ', 'verbose_name_plural': 'Заказы'},
        ),
    ]