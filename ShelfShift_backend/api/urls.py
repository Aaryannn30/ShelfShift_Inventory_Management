from django.urls import path
from . import views
from .views import PriceListCreateView
from django.urls import path
from .views import BillListCreateView, BillDetailView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
     # JWT Authentication Endpoints
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),  # Token generation
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Token refresh

    # User Registration Endpoint
    path('register/', views.RegisterView.as_view(), name='auth_register'),  # User registration

    # Test Endpoint
    path('test/', views.testEndPoint, name='test'),  # A test endpoint

    # General Routes
    path('', views.getRoutes, name='api_routes'),  # To get available API routes

    # Item Endpoints
    # path('items/', views.ItemListView.as_view(), name='item_list'),  # View all items
    # path('item/<int:pk>/', views.ItemDetailView.as_view(), name='item_detail'),  # View item details
    path('item/new/<int:user_id>', views.ItemCreateView.as_view(), name='item_create'),  # Create a new item
    path('items/<int:user_id>', views.ShowActiveItem, name='user_items'),
    path('pricelist/new/<int:user_id>', views.PriceListCreateView.as_view(), name='pricelist_create'),
    path('pricelist/<int:user_id>', views.ShowPriceListItem, name='pricelist_items'),
    path('group_item/new/<int:user_id>', views.ItemGroupCreateView.as_view(), name='grouplist_items'),
    path('group_item/<int:user_id>', views.ItemGroupCreateView.as_view(), name='grouplist_items'),
    path('api/bills/', BillListCreateView.as_view(), name='bill-list-create'),
    path('api/bills/<int:pk>/', BillDetailView.as_view(), name='bill-detail'),
    # path('item/<int:pk>/edit/', views.ItemUpdateView.as_view(), name='item_update'),  # Update an existing item
    # path('item/<int:pk>/delete/', views.ItemDeleteView.as_view(), name='item_delete'),  # Delete an item
]