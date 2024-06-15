from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes, renderer_classes
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializer import UserSerializer,ProductSerializer, LoginSerializer,UserProfileSerializer
from .models import User, Product
from django.contrib.auth.hashers import make_password
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework.renderers import JSONRenderer
from .renderers import UserRenderer
from rest_framework_simplejwt.tokens import RefreshToken

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

def home(request):
    return render(request, 'Home.html')

@api_view(['GET'])
@permission_classes([IsAuthenticated])
@renderer_classes([UserRenderer])
def getuserprofile(request):
    serializer=UserSerializer(request.user)
    return Response(serializer.data)

@api_view(['GET'])
#@permission_classes([IsAuthenticated])
def getusers(request):
    users= User.objects.all()
    serializer=UserSerializer(users, many=True)
    return Response(serializer.data)


@api_view(['GET'])
#@permission_classes([IsAuthenticated])
def getproducts(request):
    Products= Product.objects.all()
    serializer=ProductSerializer(Products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
#@permission_classes([IsAuthenticated])
def getproduct(request,pk):
    product= Product.objects.get(id=pk)
    serializer=ProductSerializer(product, many=False)
    return Response(serializer.data)

@api_view(['POST'])
@renderer_classes([UserRenderer])
def registerUser(request):
     serializer=UserSerializer(data=request.data)
     if serializer.is_valid(raise_exception=True):
        user=serializer.save()
        token=get_tokens_for_user(user)
        return Response({'token':token,'status': 'success','Firstname':request.data['Firstname'],'Lastname':request.data['Lastname'],'Company':request.data['Company'],'Email':request.data['email']}, status=status.HTTP_200_OK)
     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@renderer_classes([UserRenderer])
def LoginUser(request):
    serializer=LoginSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        email=request.data['email']
        password=request.data['password']
        email=request.data['email']
        user=authenticate(email=email, password=password)
        if user is not None:
            token=get_tokens_for_user(user)
            return Response({'token':token, 'Status':'Login succesful'},status=status.HTTP_200_OK)
        else:
            return Response({'error':{'non_field_errors':['email or password is not valid']}}, status=status.HTTP_404_NOT_FOUND)
            


    

       
    

  
    
   
      
    


#class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    #def validate(self, attrs):
       # data = super().validate(attrs)
        #serializer = UserSerializerwithToken(self.user).data
        #for i,j in serializer.items():
            #data[i]=j
        #return data
   
#class MyTokenObtainPairView(TokenObtainPairView):
    #serializer_class=MyTokenObtainPairSerializer

# Create your views here.
