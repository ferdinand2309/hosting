function add(){
  var elements = document.querySelectorAll(".entrada-usuario");
  var valor1 = document.getElementById('cla1').value;
  var valor2 = document.getElementById('cla2').value;
  var valor3 = document.getElementById('cla3').value;
  var valor4 = document.getElementById('cla4').value;
  var valor5 = document.getElementById('cla5').value;

  for(var i = 0; i < elements.length;i++)
  {
     elements[i].value = valor1 + valor2 + valor3 + valor4 + valor5;
  }
}

function add1(){
  var elements = document.querySelectorAll(".entrada-usuario1");
  var valor6 = document.getElementById('cla11').value;
  var valor7 = document.getElementById('cla22').value;
  var valor8 = document.getElementById('cla33').value;
  var valor9 = document.getElementById('cla44').value;
  var valor0 = document.getElementById('cla55').value;

  for(var i = 0; i < elements.length;i++)
  {
     elements[i].value = valor6 + valor7 + valor8 + valor9 + valor0;
  }
}
