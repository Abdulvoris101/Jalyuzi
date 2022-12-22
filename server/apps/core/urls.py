from django.urls import path
from .views import CategoryView, ContactView, AchievementView, ProductView, SubCategoryView, SubCategoryDetailView, ProductDetailView, CategoryDetailView, ColorView, CatalogView, PropertyView

urlpatterns = [
    path('categories/', CategoryView.as_view()),
    path('products/', ProductView.as_view()),
    path('product/<int:pk>/', ProductDetailView.as_view(), name='product_detail'),
    path('category/<int:pk>/', CategoryDetailView.as_view()),
    path('filter/colors/', ColorView.as_view()),
    path('filter/property/', PropertyView.as_view()),
    path('filter/catalog/', CatalogView.as_view()),
    path('subcategory/', SubCategoryView.as_view()),
    path('subcategory/<int:pk>/', SubCategoryDetailView.as_view()),
    path('achivement/', AchievementView.as_view()),
    path('contact/', ContactView.as_view())
]