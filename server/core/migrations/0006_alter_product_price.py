# Generated by Django 4.1.2 on 2022-10-10 12:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_alter_product_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.BigIntegerField(),
        ),
    ]