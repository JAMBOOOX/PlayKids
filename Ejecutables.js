function mostrarnombre(){
    var NOM = document.getElementById("NOMBRE").value;
    document.getElementById("NO").innerHTML= NOM;
}
function mostraredad(){
    var EDA = document.getElementById("EDAD").value;
    document.getElementById("ED").innerHTML= EDA;
}function mostraradulto(){
    var par = document.getElementById("PARENTEZCONIÑO").value;
    document.getElementById("PA").innerHTML= par;
}
function ejecuta(){


document.getElementById("suma").onclick= suma;
document.getElementById("resta").onclick= resta;
document.getElementById("letras").onclick= letras;
document.getElementById("huesos").onclick= huesos;



}
window.onload=ejecuta;  
function suma(){
    window.location.href='juego_sumas.html'}
function resta(){
    window.location.href='juego_restas.html'}
function letras(){
    window.location.href='juego_letras.html'}
function huesos(){
    window.location.href='juego_huesos.html'}
