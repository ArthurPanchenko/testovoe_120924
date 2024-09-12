from django.db import models


class Product(models.Model):
    '''Модель продукта (название, цена, описание)'''

    title = models.CharField('Название', max_length=100)
    description = models.TextField('Описание')
    price = models.DecimalField('Цена', max_digits=10, decimal_places=2)

    def __str__(self):
        return self.title
    
    