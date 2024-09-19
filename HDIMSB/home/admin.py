from django.contrib import admin
from django.forms import ModelForm
from django.http import HttpRequest
from . import models

@admin.register(models.User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['name', 'username', 'email', 'phone', 'date_of_joining']
    search_fields = ['name', 'username', 'email', 'phone']
    list_filter = ['date_of_joining']
    list_per_page = 10
    list_editable = ['phone']
    list_display_links = ['name', 'username']
    list_max_show_all = 100
    list_select_related = True