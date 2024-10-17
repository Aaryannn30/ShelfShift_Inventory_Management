import json
from django.shortcuts import render

# Create your views here.

from django.shortcuts import render
from django.http import JsonResponse
from api.models import User

from .serializers import MyTokenObtainPairSerializer, RegisterSerializer , ItemGroupSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics , viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.authentication import TokenAuthentication

from django.shortcuts import render, get_object_or_404
from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
# from .models import Item

from rest_framework import generics ,status
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
        data = dict(request.data)  # Convert the QueryDict to a standard dict
        data['user'] = user.id 
        # request.data['user'] = user.id  # Assign the current user to the item data

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
from .models import PriceList
from .serializers import PriceListSerializer

# class PriceListCreateView(generics.CreateAPIView):
#     queryset = PriceList.objects.all()
#     serializer_class = PriceListSerializer

    
class PriceListCreateView(APIView):
    def post(self, request, *args, **kwargs):
        user = get_object_or_404(User, id=self.kwargs['user_id'])
        # request.data._mutable = True
        # data = request.data.copy()
        data = dict(request.data)  # Convert the QueryDict to a standard dict
        data['user'] = user.id 
        # request.data['user'] = user.id  # Assign the current user to the item data

        # Serializer for validation and saving
        serializer = PriceListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=user)  # Save with the user data
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            # Log the errors for debugging purposes
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
from .models import PriceList

@api_view(['GET'])
def ShowPriceListItem(request, user_id):
    items = PriceList.objects.filter(user_id=user_id)
    if not items.exists():
        return Response({"detail": "No items found for this user."}, status=status.HTTP_404_NOT_FOUND)
    serializer = PriceListSerializer(items, many=True)
    return Response(serializer.data)

# =========================================================================================================

from .models import ItemGroup

    
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import ItemGroup
from .serializers import ItemGroupSerializer

class ItemGroupCreateView(APIView):
    def post(self, request, *args, **kwargs):
        user = get_object_or_404(User, id=self.kwargs['user_id'])
        data = dict(request.data)  # Convert the QueryDict to a standard dict
        data['user'] = user.id  # Attach user ID

        # Manually handle attributes JSON conversion for SQLite
        if 'attributes' in data:
            data['attributes'] = json.dumps(data['attributes'])  # Convert Python list/dict to JSON string

        serializer = ItemGroupSerializer(data=data)
        if serializer.is_valid():
            serializer.save(user=user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            # Log the errors for debugging purposes
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
from .models import ItemGroup

@api_view(['GET'])
def ShowGroupListItem(request, user_id):
    items = ItemGroup.objects.filter(user_id=user_id)
    if not items.exists():
        return Response({"detail": "No items found for this user."}, status=status.HTTP_404_NOT_FOUND)
    serializer = ItemGroupSerializer(items, many=True)
    return Response(serializer.data)

from rest_framework import generics
from .models import CompositeItem
from .serializers import CompositeItemSerializer
from rest_framework.permissions import IsAuthenticated

class CompositeItemListCreateView(generics.ListCreateAPIView):
    serializer_class = CompositeItemSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return CompositeItem.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

# ====================================================================================================
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Bill
from .serializers import BillSerializer

class BillListCreateView(generics.ListCreateAPIView):
    serializer_class = BillSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Filter bills to only include those for the authenticated user
        return Bill.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        # Save the bill with the user set to the authenticated user
        serializer.save(user=self.request.user)


class BillDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = BillSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Filter bills to only include those for the authenticated user
        return Bill.objects.filter(user=self.request.user)

    # No need to override the perform_update and perform_destroy unless you need custom logic

