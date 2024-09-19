from django.shortcuts import render
from . import models
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(["POST"])
def login(request):
    email = request.data.get("email")
    password = request.data.get("password")
    user = models.User.objects.filter(email=email, password=password).exists()
    return Response("Login Successful" if user else "Invalid Credentials")

