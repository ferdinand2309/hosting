# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from __future__ import absolute_import
from django.shortcuts import render, redirect
from django.template import RequestContext
from django.shortcuts import render_to_response
from django.http import HttpResponse, HttpResponseRedirect
from django.core.urlresolvers import reverse_lazy

## libresrias para el sign up
from django.contrib.auth import login, authenticate

### importacion de los formularios
from apps.usuario.forms import UserForm

from apps.usuario.models import User
#from apps.usuario.forms import UserForm
#from apps.usuario.models import User

from django.views.generic import ListView


# Create your views here.

## funcion de la vista de la pagina principal(Login)
def index(request):
	return render(request, 'index1.html')

def signUp(request):
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username = username, password = raw_password)
            login(request, user)
            return redirect(request, 'usuarios/newUsuario.html',{'form' :form})
    else :
        form = UserForm()
    return render(request, 'usuarios/newUsuario.html',{'form' :form})
