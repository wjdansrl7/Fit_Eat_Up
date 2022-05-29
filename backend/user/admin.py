from django.contrib import admin
from user.models import Client, Review

# Register your models here.
@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    pass


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    pass