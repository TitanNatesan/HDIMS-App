from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=50)
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=50)
    email = models.EmailField(max_length=50, unique=True)
    phone = models.CharField(max_length=50)
    date_of_joining = models.DateTimeField(auto_now=False, auto_now_add=True)
    
    