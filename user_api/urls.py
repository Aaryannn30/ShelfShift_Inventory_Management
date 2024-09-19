from django.urls import path
# from . import views

# urlpatterns = [
#     path('register/', views.UserRegister.as_view(), name='register'),
#     path('login/', views.UserLogin.as_view(), name='login'),
#     path('logout/', views.UserLogout.as_view(), name='logout'),
#     path('user/', views.UserView.as_view(), name='user'),
#     # path('dsidebar/', views.DSidebar, name='dsidebar'),
# ]


# from django.urls import path
# from .views import RegisterView, UserProfileView
# from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

# urlpatterns = [
#     path('register/', RegisterView.as_view(), name='register'),
#     path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
#     path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
#     path('user/', UserProfileView.as_view(), name='user_profile'),
# ]

# urls.py
from django.urls import path
from .views import RegisterView, LoginView, UserProfileView

urlpatterns = [
    path('api/register/', RegisterView.as_view(), name='register'),
    path('api/login/', LoginView.as_view(), name='login'),
    path('api/user/', UserProfileView.as_view(), name='user_profile'),
]
