from __future__ import absolute_import
from django.shortcuts import render, redirect
from django.http import HttpResponse
from apps.datoslaborales.forms import datoslaboralesform
from apps.datoslaborales.models import datoslaborales
from apps.centro.models import CentroTrabajo

def datos(request):
    if request.method == 'POST':
        form = datoslaboralesform(request.POST)
        if form.is_valid():
            form.save()
        return redirect('datoslaborales:datoslaborales')
    else:
        form = datoslaboralesform()
    return render(request, 'sabanadatos/plantillapersonal.html')

def Personal_list(request):
    uss = request.user.cct
    if request.user.is_superuser:
        persona = datoslaborales.objects.all().order_by('id')
        centro = CentroTrabajo.objects.all().order_by('id')
        contexto = {'Personal':persona, 'Centros':centro}
    else:
        persona = datoslaborales.objects.filter(cct = uss)
        centro = CentroTrabajo.objects.filter(centro_trabajo = uss)
        contexto = {'Personal':persona, 'Centros':centro}
    return render(request, 'sabanadatos/personal_list.html', {'Personal':persona,'Centros':centro})

def Personal_edit(request, id_persona):
    persona = datoslaborales.objects.get(id=id_persona)
    if request.method == 'GET':
        form = datoslaboralesform(instance=persona)
    else:
        form = datoslaboralesform(request.POST, instance=persona)
        if form.is_valid():
            form.save()
        return redirect('datoslaborales:datoslaborales_listar')
    return render(request, 'sabanadatos/plantillapersonal.html')

def Personal_delete(request, id_persona):
    persona = datoslaborales.objects.get(id=id_persona)
    if request.method == 'POST':
        persona.delete()
        return redirect('datoslaborales:datoslaborales_listar')
    return render(request, 'sabanadatos/borrar.html')
