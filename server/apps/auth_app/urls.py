import imp
from django.urls import path
from .views import UserRegisterView, UserLoginView, UserMe, UserVerification, ResetPassword, UserLogout, SendToResetPassword, SendVerificationView

urlpatterns = [
    path('', UserRegisterView.as_view()),
    path('login/', UserLoginView.as_view()),
    path('me/', UserMe.as_view()),
    path('verification/', UserVerification.as_view()),
    path('logout/', UserLogout.as_view()),
    path('send_to_reset/', SendToResetPassword.as_view()),
    path('reset_password/', ResetPassword.as_view()),
    path('send_verification/', SendVerificationView.as_view())
]
