from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from apps.auth_app.models import CustomUser
from django.contrib.auth.models import Group



@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    inlines = []

    model = CustomUser

    # list_display = ['username', 'first_name', 'last_name', 'phone_number', 'user_groups_display', 'is_staff']

    add_fieldsets = (
        *UserAdmin.add_fieldsets,
        (
            'Custom fields',
            {
                'fields': (
                    'first_name',
                    'last_name',
                    'phone_number',
                    'telegram_id'
                    
                )
            }
        )
    )

    # Edit user
    fieldsets = (
        *UserAdmin.fieldsets,
        (
            'Custom fields',
            {
                'fields': (
                    'phone_number',
                    'confirm',
                    'first_confirm',
                    'telegram_id'
                    
                )
            }
        )
    )

    def user_groups_display(self, user):
        try:
            groups = []
            for group in user.groups.all():
                groups.append(group.name)
            return ', '.join(groups)
        except:
            return '-'


