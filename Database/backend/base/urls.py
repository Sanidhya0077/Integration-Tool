from django.urls import path,include
from . import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns= [
    #path('user/login/',views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('user/profile/',views.getuserprofile, name='user_profile'),
    path('users/',views.getusers, name='users'),
    path('products/',views.getproducts, name='products'),
    path('product/<str:pk>/',views.getproduct, name='product'),
    path('user/register/', views.registerUser, name='register'),
    path('user/login/', views.LoginUser, name='login'),
    path('api/',views.home, name='home'),
]