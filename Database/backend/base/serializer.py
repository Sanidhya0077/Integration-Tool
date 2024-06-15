from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User,Product,Functionality,Functionality_requested
class UserSerializer(serializers.ModelSerializer):
    confirm_password=serializers.CharField(style={'input_type':'password'}, write_only=True)
    class Meta:
        model=User
        fields= ['Firstname', 'Lastname', 'Company', 'email', 'password', 'confirm_password', 'is_admin']
        extra_kwargs={
            'password':{'write_only':True}

        }
    #validating password while registering
    def validate(self, attrs):
        password = attrs.get('password')
        confirm_password = attrs.get('confirm_password')
        if password != confirm_password:
            raise serializers.ValidationError("password doesn't match")
             
        return super().validate(attrs)
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255)
    class Meta:
        model=User
        fields= ['email', 'password']


class UserProfileSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255)
    class Meta:
        model=User
        fields= ['id','email','Firstname', 'Lastname', 'Company', 'is_admin']


#class UserSerializerwithToken(UserSerializer):
    #token = serializers.SerializerMethodField(read_only=True)
    #class Meta:
        #model=User
        #fields= ['id', 'email','token']
    #def get_token(self, obj):
        #token=RefreshToken.for_user(obj)
        #return str(token.access_token)    

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=Product
        fields= '__all__'

class FunctionalitySerializer(serializers.ModelSerializer):
    class Meta:
        model=Functionality
        fields= '__all__'

class Functionality_requestedSerializer(serializers.ModelSerializer):
    class Meta:
        model=Functionality_requested
        fields= '__all__'
