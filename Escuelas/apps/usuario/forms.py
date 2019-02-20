from __future__ import absolute_import
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import get_user_model
from django.db import models
from apps.usuario.models import User

User = get_user_model()

class UserForm(UserCreationForm):

    class Meta:
        model = User
        fields = ('username', 'is_superuser', 'first_name', 'last_name', 'cct', 'password1', 'password2')
