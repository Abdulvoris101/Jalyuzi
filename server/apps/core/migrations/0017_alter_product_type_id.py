# Generated by Django 4.1.4 on 2023-01-05 19:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0016_remove_product_color_id_product_type_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='type_id',
            field=models.BooleanField(default=False, verbose_name='Есть ли Тип продукта*'),
        ),
    ]
