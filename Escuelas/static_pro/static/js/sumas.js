/* Sumar dos números. */
function sumar (valor) {
    var total = 0;
    valor = parseInt(valor); // Convertir el valor a un entero (número).
    total = document.getElementById('spTotal').innerHTML;
    // Aquí valido si hay un valor previo, si no hay datos, le pongo un cero "0".
    total = (total == null || total == undefined || total == "") ? 0 : total;
    /* Esta es la suma. */
    total = (parseInt(total) + parseInt(valor));
    // Colocar el resultado de la suma en el control "span".
    document.getElementById('spTotal').innerHTML = total;
}
function sumar1 (valor) {
    var total = 0;
    valor = parseInt(valor); // Convertir el valor a un entero (número).
    total = document.getElementById('spTotal1').innerHTML;
    // Aquí valido si hay un valor previo, si no hay datos, le pongo un cero "0".
    total = (total == null || total == undefined || total == "") ? 0 : total;
    /* Esta es la suma. */
    total = (parseInt(total) + parseInt(valor));
    // Colocar el resultado de la suma en el control "span".
    document.getElementById('spTotal1').innerHTML = total;
}
function sumar2 (valor) {
    var total = 0;
    valor = parseInt(valor);
    total = document.getElementById('spTotal2').innerHTML;
    total = (total == null || total == undefined || total == "") ? 0 : total;
    total = (parseInt(total) + parseInt(valor));
    document.getElementById('spTotal2').innerHTML = total;
}
function sumarSu (valor) {
    var total = 0;
    valor = parseInt(valor);
    total = document.getElementById('sp5').innerHTML;
    total = (total == null || total == undefined || total == "") ? 0 : total;
    total = (parseInt(total) + parseInt(valor));
    document.getElementById('sp5').innerHTML = total;
}
function sumarSuEF (valor) {
    var total = 0;
    valor = parseInt(valor);
    total = document.getElementById('sp5SuEF').innerHTML;
    total = (total == null || total == undefined || total == "") ? 0 : total;
    total = (parseInt(total) + parseInt(valor));
    document.getElementById('sp5SuEF').innerHTML = total;
}
function sumarAPT (valor) {
    var total = 0;
    valor = parseInt(valor);
    total = document.getElementById('sp51').innerHTML;
    total = (total == null || total == undefined || total == "") ? 0 : total;
    total = (parseInt(total) + parseInt(valor));
    document.getElementById('sp51').innerHTML = total;
}
function sumarATPDic (valor) {
    var total = 0;
    valor = parseInt(valor);
    total = document.getElementById('sp51Dic').innerHTML;
    total = (total == null || total == undefined || total == "") ? 0 : total;
    total = (parseInt(total) + parseInt(valor));
    document.getElementById('sp51Dic').innerHTML = total;
}
function sumarDir (valor) {
    var total = 0;
    valor = parseInt(valor);
    total = document.getElementById('sp5Dir').innerHTML;
    total = (total == null || total == undefined || total == "") ? 0 : total;
    total = (parseInt(total) + parseInt(valor));
    document.getElementById('sp5Dir').innerHTML = total;
}
function sumarDirOTN (valor) {
    var total = 0;
    valor = parseInt(valor);
    total = document.getElementById('sp5DirOTN').innerHTML;
    total = (total == null || total == undefined || total == "") ? 0 : total;
    total = (parseInt(total) + parseInt(valor));
    document.getElementById('sp5DirOTN').innerHTML = total;
}
function sumarDoc (valor) {
    var total = 0;
    valor = parseInt(valor);
    total = document.getElementById('sp5Doc').innerHTML;
    total = (total == null || total == undefined || total == "") ? 0 : total;
    total = (parseInt(total) + parseInt(valor));
    document.getElementById('sp5Doc').innerHTML = total;
}
function sumarDocCA (valor) {
    var total = 0;
    valor = parseInt(valor);
    total = document.getElementById('sp5DocCA').innerHTML;
    total = (total == null || total == undefined || total == "") ? 0 : total;
    total = (parseInt(total) + parseInt(valor));
    document.getElementById('sp5DocCA').innerHTML = total;
}
function sumarDocOTN (valor) {
    var total = 0;
    valor = parseInt(valor);
    total = document.getElementById('sp5DocOTN').innerHTML;
    total = (total == null || total == undefined || total == "") ? 0 : total;
    total = (parseInt(total) + parseInt(valor));
    document.getElementById('sp5DocOTN').innerHTML = total;
}
function sumarDocEF (valor) {
    var total = 0;
    valor = parseInt(valor);
    total = document.getElementById('sp5DocEF').innerHTML;
    total = (total == null || total == undefined || total == "") ? 0 : total;
    total = (parseInt(total) + parseInt(valor));
    document.getElementById('sp5DocEF').innerHTML = total;
}
function sumarDocEFCA (valor) {
    var total = 0;
    valor = parseInt(valor);
    total = document.getElementById('sp5DocEFCA').innerHTML;
    total = (total == null || total == undefined || total == "") ? 0 : total;
    total = (parseInt(total) + parseInt(valor));
    document.getElementById('sp5DocEFCA').innerHTML = total;
}
function sumarASP (valor) {
    var total = 0;
    valor = parseInt(valor);
    total = document.getElementById('sp51ASP').innerHTML;
    total = (total == null || total == undefined || total == "") ? 0 : total;
    total = (parseInt(total) + parseInt(valor));
    document.getElementById('sp51ASP').innerHTML = total;
}
function sumarADM (valor) {
    var total = 0;
    valor = parseInt(valor);
    total = document.getElementById('sp5113').innerHTML;
    total = (total == null || total == undefined || total == "") ? 0 : total;
    total = (parseInt(total) + parseInt(valor));
    document.getElementById('sp5113').innerHTML = total;
}
function sumarTotal1 (valor) {
    var total = 0;
    valor = parseInt(valor);
    total = document.getElementById('sp5113To').innerHTML;
    total = (total == null || total == undefined || total == "") ? 0 : total;
    total = (parseInt(total) + parseInt(valor));
    document.getElementById('sp5113To').innerHTML = total;
}
function sumarADMIS (valor) {
    var total = 0;
    valor = parseInt(valor);
    total = document.getElementById('totaa').innerHTML;
    total = (total == null || total == undefined || total == "") ? 0 : total;
    total = (parseInt(total) + parseInt(valor));
    document.getElementById('totaa').innerHTML = total;
}
function sumarDOCEN (valor) {
    var total = 0;
    valor = parseInt(valor);
    total = document.getElementById('TT').innerHTML;
    total = (total == null || total == undefined || total == "") ? 0 : total;
    total = (parseInt(total) + parseInt(valor));
    document.getElementById('TT').innerHTML = total;
}
function sumarDOCENTES (valor) {
    var total = 0;
    valor = parseInt(valor);
    total = document.getElementById('totall').innerHTML;
    total = (total == null || total == undefined || total == "") ? 0 : total;
    total = (parseInt(total) + parseInt(valor));
    document.getElementById('totall').innerHTML = total;
}
