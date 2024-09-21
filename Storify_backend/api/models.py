

# Create your models here.
from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import AbstractUser
from django.contrib.auth import get_user_model


class User(AbstractUser):
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']


    def profile(self):
        profile = Profile.objects.get(user=self)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=1000)
    bio = models.CharField(max_length=100)
    image = models.ImageField(upload_to="user_images", default="default.jpg")
    verified = models.BooleanField(default=False)


def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

post_save.connect(create_user_profile, sender=User)
post_save.connect(save_user_profile, sender=User)

from django.db import models
from django.contrib.auth.models import User


#========================================================================================================
# Item model

from django.contrib.auth import get_user_model

User = get_user_model()

class Item(models.Model):
    TYPE_CHOICES = (
        ('Goods', 'Goods'),
        ('Service', 'Service'),
    )
    
    DIMENSION_UNIT_CHOICES = (
        ('cm', 'Centimeters'),
        ('inch', 'Inches'),
    )

    WEIGHT_UNIT_CHOICES = (
        ('kg', 'Kilograms'),
        ('lbs', 'Pounds'),
    )

    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Link to User model
    type = models.CharField(max_length=10, choices=TYPE_CHOICES)  # Goods or Service
    image = models.ImageField(upload_to='item_images/', null=True, blank=True)  # Image upload
    name = models.CharField(max_length=255)
    sku = models.CharField(max_length=100, unique=True)
    unit = models.CharField(max_length=50)  # Can be customized based on needs (e.g., pieces, packs)
    is_returnable = models.BooleanField(default=False)  # Checkbox for returnable items

    # Dimensions
    length = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    width = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    height = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    dimension_unit = models.CharField(max_length=10, choices=DIMENSION_UNIT_CHOICES, default='cm')

    # Weight
    weight = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    weight_unit = models.CharField(max_length=10, choices=WEIGHT_UNIT_CHOICES, default='kg')

    # Additional fields
    manufacturer = models.CharField(max_length=255, null=True, blank=True)
    brand = models.CharField(max_length=255, null=True, blank=True)
    upc = models.CharField(max_length=100, null=True, blank=True)
    mpn = models.CharField(max_length=100, null=True, blank=True)
    isbn = models.CharField(max_length=100, null=True, blank=True)

    # Sales and Purchase Information
    selling_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    sales_description = models.TextField(null=True, blank=True)
    sales_account = models.CharField(max_length=100, null=True, blank=True)
    cost = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    purchase_description = models.TextField(null=True, blank=True)
    purchase_account = models.CharField(max_length=100, null=True, blank=True)

    # Inventory Information
    inventory_account = models.CharField(max_length=100, null=True, blank=True)
    opening_stock = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    reorder_point = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    def __str__(self):
        return self.name
    
    # -----------------------------------------------------------------------------------------------
    # price list
    from django.db import models

class PriceList(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    transaction_type = models.CharField(max_length=50)
    price_list_type = models.CharField(max_length=50)
    percentage_type = models.CharField(max_length=50)
    round_off_to = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return self.name
