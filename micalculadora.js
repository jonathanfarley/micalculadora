window.onload=Click;

var num1="";
var control=true;

function Click() {
	var uno=document.getElementById("numuno");
	uno.addEventListener("click",function() {
								clicEn("1");
								});

	var dos=document.getElementById("numdos");
	dos.addEventListener("click",function() {
								clicEn("2");
								});
	var tres=document.getElementById("numtres");
	tres.addEventListener("click",function() {
								clicEn("3");
								});


	var cuatro=document.getElementById("numcuatro");
	cuatro.addEventListener("click",function() {
								clicEn("4");
								});


	var cinco=document.getElementById("numcinco");
	cinco.addEventListener("click",function() {
								clicEn("5");
								});


	var seis=document.getElementById("numseis");
	seis.addEventListener("click",function() {
								clicEn("6");
								});


	var siete=document.getElementById("numsiete");
	siete.addEventListener("click",function() {
								clicEn("7");
								});


	var ocho=document.getElementById("numocho");
	ocho.addEventListener("click",function() {
								clicEn("8");
								});


	var nueve=document.getElementById("numnueve");
	nueve.addEventListener("click",function() {
								clicEn("9");
								});

	var mas=document.getElementById("suma");
	mas.addEventListener("click",function() {
								clicEn("+");
								});


	var cero=document.getElementById("numcero");
	cero.addEventListener("click",function() {
								clicEn("0");
								});

	var menos=document.getElementById("resta");
	menos.addEventListener("click",function() {
								clicEn("-");
								});

	var division=document.getElementById("division");
	division.addEventListener("click",function() {
								clicEn("/");
								});

	var multiplicacion=document.getElementById("multiplicacion");
	multiplicacion.addEventListener("click",function() {
								clicEn("*");
								});
	
	var igual=document.getElementById("igual");
	igual.addEventListener("click",function() {
								resultado("");
								});
	var supr=document.getElementById("supr");
	supr.addEventListener("click",function() {
								borrar("");
								});
	var eliminar=document.getElementById("borrar");
	eliminar.addEventListener("click",eliminar1)
}

function clicEn(num){
	var imprimir=document.getElementById("numero");
	num1+=num;
	imprimir.textContent=num1;
}
function resultado(){
	var calcu=eval(num1);
	var total=document.getElementById("numero");
	total.textContent=calcu;

}
function borrar(){
	num1="";
	var total=document.getElementById("numero");
	total.textContent=num1;
}

function eliminar1() {
	var anterior=document.getElementById("numero");
	var	bor1=num1.slice(0,-1);
	num1=bor1;
	anterior.textContent=num1;
}