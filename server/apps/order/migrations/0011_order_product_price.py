# Generated by Django 4.1.2 on 2022-11-26 18:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0010_alter_order_overall_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='product_price',
            field=models.CharField(default=12, max_length=255, verbose_name='Цена за продукта'),
            preserve_default=False,
        ),
    ]