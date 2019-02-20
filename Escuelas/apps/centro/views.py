from __future__ import absolute_import
from django.shortcuts import render, redirect
from django.http import HttpResponse
from apps.centro.forms import centroform
from apps.centro.models import CentroTrabajo

def centro(request):
    if request.method == 'POST':
        form = centroform(request.POST)
        if form.is_valid():
            form.save()
        return redirect('centro:centro')
    else:
        form = centroform()
    return render(request, 'estructura/escuelas.html')

def Centro_edit(request, id_centro):
    centro = CentroTrabajo.objects.get(id=id_centro)
    if request.method == 'GET':
        form = centroform(instance=centro)
    else:
        form = centroform(request.POST, instance=centro)
        if form.is_valid():
            form.save()
        return redirect('datoslaborales:datoslaborales_listar')
    return render(request, 'estructura/escuelas.html')

def Centro_delete(request, id_centro):
    centro = CentroTrabajo.objects.get(id=id_centro)
    if request.method == 'POST':
        centro.delete()
        return redirect('datoslaborales:datoslaborales_listar')
    return render(request, 'sabanadatos/borrar.html')
