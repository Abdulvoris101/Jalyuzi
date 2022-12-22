# Generated by Django 4.1.2 on 2022-11-24 14:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_alter_product_image'),
        ('order', '0004_alter_order_options'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='product',
        ),
        migrations.AddField(
            model_name='order',
            name='product',
            field=models.ManyToManyField(related_name='orders', to='core.product', verbose_name='Продукт'),
        ),
    ]