from django.urls import path
from .views import CategoryView, ProductView, ProductDetailView, CategoryDetailView

urlpatterns = [
    path('categories/', CategoryView.as_view()),
    path('products/', ProductView.as_view()),
    path('product/<int:pk>/', ProductDetailView.as_view()),
    path('category/<int:pk>/', CategoryDetailView.as_view())
]
