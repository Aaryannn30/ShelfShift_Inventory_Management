from api.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import Item

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        
        # These are claims, you can add custom claims
        token['full_name'] = user.profile.full_name
        token['username'] = user.username
        token['email'] = user.email
        token['bio'] = user.profile.bio
        token['image'] = str(user.profile.image)
        token['verified'] = user.profile.verified
        # ...
        return token


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('email', 'username', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email']

        )

        user.set_password(validated_data['password'])
        user.save()

        return user

#=========================================================================================================================

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['id', 'name', 'sku', 'unit', 'length', 'width', 'height', 'dimension_unit', 'weight', 'weight_unit',
                   'manufacturer', 'brand', 'upc', 'mpn', 'isbn', 'selling_price', 'sales_description', 'sales_account', 
                   'cost', 'purchase_description', 'purchase_account', 'inventory_account', 'opening_stock', 'reorder_point', 'image', 'is_returnable']

    # Custom validation or logic can go here, if needed

# ---------------------------------------------------------------------------------------
from .models import PriceList

class PriceListSerializer(serializers.ModelSerializer):
    class Meta:
        model = PriceList
        fields = ['id', 'name', 'description', 'transaction_type', 'price_list_type', 'percentage_type', 'round_off_to']


#====================================================================================================================


from rest_framework import serializers
from .models import ItemGroup

class ItemGroupSerializer(serializers.ModelSerializer):
    attributes = serializers.JSONField()  # Handle JSON parsing

    class Meta:
        model = ItemGroup
        fields = ['user', 'item_group_name', 'description', 'manufacturer', 'brand', 'returnable_item', 'attributes']

from rest_framework import serializers
from .models import CompositeItem, AssociatedItem, AssociatedService

class AssociatedItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = AssociatedItem
        fields = ['name', 'quantity', 'sellingPrice', 'costPrice']

class AssociatedServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = AssociatedService
        fields = ['name', 'quantity', 'sellingPrice', 'costPrice']

class CompositeItemSerializer(serializers.ModelSerializer):
    associated_items = AssociatedItemSerializer(many=True)
    associated_services = AssociatedServiceSerializer(many=True)

class Meta:
    model = CompositeItem
    fields = ['id', 'name', 'sku', 'unit', 'returnableItem', 'associated_items', 'associated_services']

def create(self, validated_data):
    associated_items_data = validated_data.pop('associated_items')
    associated_services_data = validated_data.pop('associated_services')
    composite_item = CompositeItem.objects.create(**validated_data)

    for item_data in associated_items_data:
        AssociatedItem.objects.create(composite=[composite_item,item_data])

    for service_data in associated_services_data:
        AssociatedService.objects.create(composite=[composite_item, service_data])

    return composite_item
# =================================================================================================
from rest_framework import serializers
from .models import Bill

class BillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bill
        fields = ['id', 'user', 'vendor', 'bill_number', 'order_number', 'bill_date',
                  'due_date', 'payment_terms', 'subject', 'total_amount', 
                  'customer_notes', 'terms', 'created_at']
        read_only_fields = ['id', 'user', 'created_at']
