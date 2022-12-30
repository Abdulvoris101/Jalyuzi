from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='category_images/')
    
    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Категории'
        verbose_name_plural = 'Категория'

class SubCategory(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='subcategory_images/')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='subcategories')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Суб-Категории'
        verbose_name_plural = 'Суб-Категория'
    
class Color(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Цвета'
        verbose_name_plural = 'Цветы'

class FabricType(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name
        
    class Meta:
        verbose_name = 'Тип ткани'
        verbose_name_plural = 'Тип ткани'

class Property(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Свойства'
        verbose_name_plural = 'Свойствы'

class Catalog(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Каталог'
        verbose_name_plural = 'Каталогы'


class Product(models.Model):
    name = models.CharField('Название', max_length=255)
    model = models.CharField('Модел', max_length=255)
    weight = models.CharField('Ширина', max_length=255, null=True, blank=True)
    color = models.ManyToManyField(Color, verbose_name='Цветы', related_name='products')
    blackout = models.CharField('Затемнение', max_length=255)
    property = models.ForeignKey(Property, verbose_name='Свойствы', on_delete=models.CASCADE, related_name='products', null=True, blank=True)
    fabrictype = models.ForeignKey(FabricType, verbose_name='Тип ткании', on_delete=models.CASCADE, related_name='products', null=True, blank=True)
    category = models.ForeignKey(Category, verbose_name='Категория', on_delete=models.CASCADE, related_name='products', blank=True, null=True)
    subcategory = models.ForeignKey(SubCategory, verbose_name='Суб-Категория', on_delete=models.CASCADE, related_name='products', blank=True, null=True)
    catalog = models.ForeignKey(Catalog, verbose_name='Каталог', on_delete=models.CASCADE, related_name='products', blank=True, null=True)
    image = models.ImageField(upload_to='products', null=True)
    price = models.BigIntegerField()
    count = models.IntegerField()
    status = models.BooleanField('Публикация', default=False)
    
    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'



class Contact(models.Model):
    name = models.CharField(max_length=255, verbose_name='Имя')
    email = models.EmailField('Маил', max_length=255)
    phone_number = models.CharField('Номер', max_length=255)
    message = models.TextField('Сообщение', max_length=255)


    def __str__(self):
        return self.name

class Achievement(models.Model):
    clients = models.CharField('Клиенты', max_length=255)
    experience = models.CharField('Опыт работы', max_length=255)
    products = models.CharField('Продукты', max_length=255)


    def __str__(self):
        return self.products