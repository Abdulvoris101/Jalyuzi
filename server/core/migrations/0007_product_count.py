# Generated by Django 4.1.2 on 2022-10-10 12:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_alter_product_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='count',
            field=models.IntegerField(default=123),
            preserve_default=False,
        ),
    ]