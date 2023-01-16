from django.urls import path
from .views import CategoryView, ContactView, ColorDetailView, PropertyDetailView, CatalogDetailView,  AchievementView, FabricTypeView, ProductView, ValuteView, SubCategoryView, SubCategoryDetailView, ProductDetailView, CategoryDetailView, ColorView, CatalogView, PropertyView

urlpatterns = [
    path('categories/', CategoryView.as_view()),
    path('products/', ProductView.as_view()),
    path('product/<slug:slug>/', ProductDetailView.as_view(), name='product_detail'),
    path('category/<int:pk>/', CategoryDetailView.as_view()),
    path('filter/colors/', ColorView.as_view()),
    path('filter/color/<int:pk>/', ColorDetailView.as_view()),
    path('filter/property/', PropertyView.as_view()),
    path('filter/property/<int:pk>/', PropertyDetailView.as_view()),
    path('filter/catalog/', CatalogView.as_view()),
    path('filter/catalog/<int:pk>/', CatalogDetailView.as_view()),
    path('filter/fabrictype/', FabricTypeView.as_view()),
    path('subcategory/', SubCategoryView.as_view()),
    path('subcategory/<int:pk>/', SubCategoryDetailView.as_view()),
    path('achivement/', AchievementView.as_view()),
    path('contact/', ContactView.as_view()),
    path('valute/', ValuteView.as_view())
]
