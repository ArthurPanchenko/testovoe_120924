from rest_framework import serializers

from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    '''Сериализатор для продукта'''

    class Meta:
        model = Product
        fields = (
            'title',
            'description',
            'price'
        )

    def validate_price(self, value):
        if value <= 0:
            raise serializers.ValidationError('Цена должна быть больше 0')
        return value