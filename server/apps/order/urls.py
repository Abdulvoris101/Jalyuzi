from django.urls import path
from .views import OrderView, OrderDetailView, AddressView

urlpatterns = [
    path('', OrderView.as_view()),
    path('<int:pk>/', OrderDetailView.as_view()),
    path('address/', AddressView.as_view())
]
