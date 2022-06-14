from django.db import models
from django.core.validators import MinLengthValidator

# Create your models here.
class Client(models.Model):
    Client_email = models.CharField(max_length=20, unique=True)
    client_password = models.CharField(max_length=20)
    Client_nickname = models.CharField(max_length=20, unique=True)
    Client_img = models.ImageField()
    intro = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return self.Client_email
        
class Review(models.Model):
    Review_id = models.IntegerField(primary_key=True)
    Review_content = models.TextField(
        MinLengthValidator(5, '너무 짧군요!')
    )
    Review_created_at = models.DateTimeField(auto_now_add=True)