from email.policy import default
from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    phone_number = models.CharField(max_length=255, verbose_name='Телефон Номер')
    confirm = models.PositiveBigIntegerField(null=True, blank=True)
    first_confirm = models.BooleanField(default=False)
    telegram_id = models.BigIntegerField(null=True, blank=True)


# Create your models here.

