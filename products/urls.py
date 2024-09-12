from django.urls import path

from .views import ProductListCreateAPIView, ProductPageView


urlpatterns = [
    path('api/products/', ProductListCreateAPIView.as_view()),
    path('', ProductPageView.as_view())

]