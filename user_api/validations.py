# from django.core.exceptions import ValidationError
# from django.contrib.auth import get_user_model
# UserModel = get_user_model()

# def custom_validation(data):
#     email = data.get('email', '').strip()
#     companyname = data.get('companyname', '').strip()
#     phone_no = data.get('phone_no')  # phone_no is an integer, no need for .strip()
#     password = data.get('password', '').strip()

#     # Check email
#     if not email or UserModel.objects.filter(email=email).exists():
#         raise ValidationError('Choose another email')

#     # Check password
#     if not password or len(password) < 8:
#         raise ValidationError('Choose another password, min 8 characters')

#     # Check company name
#     if not companyname:
#         raise ValidationError('Choose another company name')

#     # Check phone number (phone_no is an integer)
#     if not phone_no or len(str(phone_no)) < 10:
#         raise ValidationError('Invalid phone number')

#     if 'email' not in data or 'companyname' not in data or 'password' not in data:
#         raise ValidationError('Email, companyname, and password are required')
    
#     return data
