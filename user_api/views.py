# from django.contrib.auth import login, logout, authenticate
# from django.shortcuts import redirect
# from rest_framework.authentication import SessionAuthentication
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from .serializers import UserRegisterSerializer, UserLoginSerializer, UserSerializer
# from rest_framework import permissions, status
# from .validations import custom_validation
# from django.shortcuts import render
# from django.shortcuts import HttpResponse
	
# class UserRegister(APIView):
#     permission_classes = (permissions.AllowAny,)

#     def post(self, request):
#         try:
#             serializer = UserRegisterSerializer(data=request.data)
#             if serializer.is_valid(raise_exception=True):
#                 user = serializer.create(serializer.validated_data)
#                 # if user:
#                 #     return HttpResponse('/sidebar')
#         except Exception as e:
#             return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)	
        


# # def DSidebar(request):
# #     return render(request, 'dsidebar.html')

# class UserLogin(APIView):
#     permission_classes = (permissions.AllowAny,)

#     def post(self, request):
#         serializer = UserLoginSerializer(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             user = serializer.validated_data['user']
#             login(request, user)
#             return Response(serializer.data, status=status.HTTP_200_OK)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class UserLogout(APIView):
#     permission_classes = (permissions.AllowAny,)
#     authentication_classes = ()

#     def post(self, request):
#         logout(request)
#         return Response(status=status.HTTP_200_OK)


# # class UserView(APIView):
# #     permission_classes = (permissions.IsAuthenticated,)
# #     authentication_classes = (SessionAuthentication,)

# #     def get(self, request):
# #         serializer = UserSerializer(request.user)
# #         return Response({'user': serializer.data}, status=status.HTTP_200_OK)
# class UserView(APIView):
#     def get(self, request):
#         try:
#             if request.user is not None:
#                 serializer = UserSerializer(request.user)
#                 return Response({'user': serializer.data}, status=status.HTTP_200_OK)
#             else:
#                 return Response(status=status.HTTP_401_UNAUTHORIZED)
#         except Exception as e:
#             return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# from django.contrib.auth.models import User
# from rest_framework import status
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from rest_framework.permissions import IsAuthenticated
# from rest_framework_simplejwt.tokens import RefreshToken
# from django.contrib.auth.hashers import make_password

# class RegisterView(APIView):
#     def post(self, request):
#         email = request.data.get('email')
#         company_name = request.data.get('companyname')
#         phone_no = request.data.get('phone_no')
#         password = request.data.get('password')
#         confirm_password = request.data.get('confirm_password')

#         if password != confirm_password:
#             return Response({"error": "Passwords do not match"}, status=status.HTTP_400_BAD_REQUEST)

#         if User.objects.filter(username=email).exists():
#             return Response({"error": "Email already exists"}, status=status.HTTP_400_BAD_REQUEST)

#         user = User.objects.create(
#             username=email,
#             email=email,
#             password=make_password(password)
#         )
#         return Response({"success": "User registered successfully"}, status=status.HTTP_201_CREATED)

# class UserProfileView(APIView):
#     permission_classes = [IsAuthenticated]

#     def get(self, request):
#         user = request.user
#         return Response({
#             "email": user.email,
#             "companyname": user.first_name,
#             "phone_no": user.last_name,
#         })


# views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
# from .serializers import RegisterSerializer, LoginSerializer, UserProfileSerializer
from django.contrib.auth import authenticate

class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = authenticate(email=serializer.data['email'], password=serializer.data['password'])
            if user:
                refresh = RefreshToken.for_user(user)
                return Response({
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                })
            return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        profile = request.user.profile
        serializer = UserProfileSerializer(profile)
        return Response(serializer.data)

    def post(self, request):
        profile = request.user.profile
        serializer = UserProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
