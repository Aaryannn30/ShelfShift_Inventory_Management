# from rest_framework import serializers
# from django.contrib.auth import get_user_model, authenticate
# from rest_framework.exceptions import ValidationError


# UserModel = get_user_model()

# # Serializer for user registration
# class UserRegisterSerializer(serializers.ModelSerializer):
#     password = serializers.CharField(write_only=True, min_length=8)

#     class Meta:
#         model = UserModel
#         fields = ['email', 'companyname', 'phone_no', 'password']

#     def validate(self, data):
#         if 'email' not in data or 'companyname' not in data or 'password' not in data:
#             raise serializers.ValidationError('Email, companyname, and password are required')
#         return data

#     def create(self, validated_data):
#         user = UserModel.objects.create_user(
#             email=validated_data['email'],
#             companyname=validated_data['companyname'],
#             phone_no=validated_data.get('phone_no'),
#             password=validated_data['password']
#         )
#         return user



# # Serializer for user login
# class UserLoginSerializer(serializers.Serializer):
#     email = serializers.EmailField()
#     password = serializers.CharField(write_only=True)

#     def validate(self, data):
#         email = data.get('email')
#         password = data.get('password')

#         if not email or not password:
#             raise ValidationError('Both email and password are required.')

#         user = authenticate(username=email, password=password)
#         if not user:
#             raise ValidationError('Invalid credentials, user not found.')

#         return {'user': user, 'email': email}


# # General user info serializer
# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UserModel
#         fields = ['email', 'companyname', 'phone_no']

#     def to_representation(self, instance):
#         if instance.is_authenticated:
#             return super().to_representation(instance)
#         else:
#             return {}


# serializers.py
from rest_framework import serializers
from .models import User, Profile
from django.contrib.auth.password_validation import validate_password

# class RegisterSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('email', 'companyname', 'phone_no', 'password')
#         extra_kwargs = {'password': {'write_only': True}}

#     def validate(self, data):
#         if len(data['password']) < 6:
#             raise serializers.ValidationError({"password": "Password should be at least 6 characters."})
#         return data

#     def create(self, validated_data):
#         user = User.objects.create_user(
#             email=validated_data['email'],
#             companyname=validated_data['companyname'],
#             phone_no=validated_data['phone_no'],
#             password=validated_data['password']
#         )
#         return user

# class LoginSerializer(serializers.Serializer):
#     email = serializers.EmailField()
#     password = serializers.CharField(write_only=True)

# class UserProfileSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UserProfile
#         fields = ('data',)
