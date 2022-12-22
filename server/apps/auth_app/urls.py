import imp
from django.urls import path
from .views import UserRegisterView, UserLoginView, UserMe, UserVerification, UserLogout

urlpatterns = [
    path('', UserRegisterView.as_view()),
    path('login/', UserLoginView.as_view()),
    path('me/', UserMe.as_view()),
    path('verification/', UserVerification.as_view()),
    path('logout/', UserLogout.as_view())
]
