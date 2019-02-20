from __future__ import absolute_import
from django.conf.urls import url, include
from apps.centro.views import centro, Centro_edit, Centro_delete
from django.contrib.auth.decorators import login_required

urlpatterns = [
    url(r'^$', login_required(centro), name='centro'),
    url(r'^editar/(?P<id_centro>\d+)/$', login_required(Centro_edit), name='Centro_edit'),
    url(r'^eliminar/(?P<id_centro>\d+)/$', login_required(Centro_delete), name='centro_eliminar'),
]
