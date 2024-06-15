from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import *


# Register your models here.
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display=['id','Firstname','Lastname','Company','email']
    fieldsets = [
        ("Credentials", {"fields": ["email", "password"]}),
        ("Personal info", {"fields": ["Firstname", "Lastname", "Company"]}),
        ("Permissions", {"fields": ["is_admin"]}),
    ]
    add_fieldsets = ["Firstname", "Lastname", "Company", "email", "password", "confirm_password"]
    search_fields = ["email"]
    ordering = ["id", "email"]
    filter_horizontal = []

admin.site.register(Product)
admin.site.register(Functionality)
admin.site.register(Functionality_requested)