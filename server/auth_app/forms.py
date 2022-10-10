from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from auth_app.models import CustomUser


class CustomUserCreationForm(UserCreationForm):
    # groups = forms.ModelChoiceField(queryset=Group.objects.all())
    # groups = forms.ModelChoiceField(queryset=Group.objects.exclude(name='Администратор'))

    class Meta:
        model = CustomUser
        # fields = "__all__"
        fields = ('first_name', 'last_name', 'phone_number')


class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = CustomUser
        # fields = "__all__"
        fields = ('first_name', 'last_name', 'phone_number')
