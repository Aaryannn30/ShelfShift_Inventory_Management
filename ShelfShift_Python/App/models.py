from django.db import models

# Create your models here.
class React(models.Model):
    product = models.CharField(max_length=200)
    price = models.CharField(max_length=30) 