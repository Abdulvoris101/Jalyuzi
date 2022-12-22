from django.dispatch import receiver
from django.contrib.auth.models import User
from django.db.models.signals import pre_save
from .models import CustomUser

def set_username(sender, instance, **kwargs):
    if not instance.username:
        findUser = CustomUser.objects.filter(username=instance.username).exists()
        print(findUser)
        if findUser == False:
            findUser = CustomUser.objects.get(username=instance.username)
            instance.username = findUser.phone_number

pre_save.connect(set_username, sender=User)
