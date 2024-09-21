from django.shortcuts import render

# Create your views here.

from django.shortcuts import render
from django.http import JsonResponse
from api.models import User

from .serializers import MyTokenObtainPairSerializer, RegisterSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes

from django.shortcuts import render, get_object_or_404
from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
# from .models import Item

from rest_framework import generics ,status
from rest_framework.permissions import IsAuthenticated
# from .models import Item , User
from .serializers import ItemSerializer
from rest_framework.views import APIView
from django.contrib.auth import get_user_model

User = get_user_model()

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

# Get All Routes
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/'
    ]
    return Response(routes)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = "Hello buddy"
        data = f'Congratulation your API just responded to POST request with text: {text}'
        return Response({'response': data}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)


#==============================================================================================

# Create view to add a new item for a specific user (using APIView)
class ItemCreateView(APIView):
    def post(self, request, *args, **kwargs):
        user = get_object_or_404(User, id=self.kwargs['user_id'])
        request.data['user'] = user.id  # Assign the current user to the item data

        # Serializer for validation and saving
        serializer = ItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=user)  # Save with the user data
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
from .models import Item

@api_view(['GET'])
def ShowActiveItem(request, user_id):
    items = Item.objects.filter(user_id=user_id)
    if not items.exists():
        return Response({"detail": "No items found for this user."}, status=status.HTTP_404_NOT_FOUND)
    serializer = ItemSerializer(items, many=True)
    return Response(serializer.data)

# ========================================================================================
from rest_framework import generics
from .models import PriceList
from .serializers import PriceListSerializer

class PriceListCreateView(generics.CreateAPIView):
    queryset = PriceList.objects.all()
    serializer_class = PriceListSerializer
