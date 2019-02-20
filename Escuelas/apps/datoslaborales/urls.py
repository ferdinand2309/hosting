from __future__ import absolute_import
from django.conf.urls import url, include
from apps.datoslaborales.views import datos, Personal_list, Personal_edit, Personal_delete
from django.contrib.auth.decorators import login_required

urlpatterns = [
    url(r'^$', login_required(datos), name='datoslaborales'),
    url(r'^listar$',login_required(Personal_list), name='datoslaborales_listar'),
    url(r'^editar/(?P<id_persona>\d+)/$', login_required(Personal_edit), name='datoslaborales_editar'),
    url(r'^eliminar/(?P<id_persona>\d+)/$', login_required(Personal_delete), name='datoslaborales_eliminar'),
]
