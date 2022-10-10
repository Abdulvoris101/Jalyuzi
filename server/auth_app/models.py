from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    phone_number = models.CharField(max_length=255, verbose_name='Телефон Номер')


# Create your models here.
