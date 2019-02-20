from __future__ import absolute_import
from django.conf.urls import url, include

from apps.usuario import views
#from apps.usuario.views import index, signUp

urlpatterns = [
	url(r'^registrar/', views.signUp, name='signup'),
]
