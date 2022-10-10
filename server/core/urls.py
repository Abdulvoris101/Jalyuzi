from django.urls import path
from .views import CategoryView, ProductView

urlpatterns = [
    path('categories/', CategoryView.as_view()),
    path('products/', ProductView.as_view())
]
