from django.views.generic import TemplateView

from rest_framework import generics

from .models import Product
from .serializers import ProductSerializer


class ProductListCreateAPIView(generics.ListCreateAPIView):
    '''View для получения списка продуктов GET и добавления нового POST'''

    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductPageView(TemplateView):
    '''View для html страницы с формой'''

    template_name = 'products/index.html'
