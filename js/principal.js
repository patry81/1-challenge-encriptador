    var texto=document.querySelector(".inputTexto");
    texto=texto.toLowerCase;
    var botonEnc=document.querySelector("#btn1");
    var textEnc=document.querySelector(".cajaTexto");
    
botonEnc.addEventListener("click", function(){
   
    texto=document.querySelector(".inputTexto").value;
    textEncriptado=texto.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");
    textEnc.textContent=textEncriptado;
    texto.value="";
    
});


//---------------------------FUNCION COPIAR


var texto2=document.querySelector(".inputTexto2");
var botonCopiar=document.querySelector("#btn3");
var copia=document.querySelector(".copia")


botonCopiar.addEventListener("click",copy);

function copy(){

   txtC=document.querySelector(".txtCopy").innerHTML="Texto Copiado:";

    copia.textContent=texto2.value; 
    copia=copia.textContent;
    
}



// --------------------------------funcion desencriptar
var botonDesenc=document.querySelector("#btn2");
var texto2=document.querySelector(".inputTexto2");
var text3=document.querySelector(".textoDesencriptado");


botonDesenc.addEventListener("click", function(){

    txtDesen=document.querySelector(".txtD").innerHTML="Texto Desencriptado:";
    
    texto2=document.querySelector(".inputTexto2").value;
    textDesencriptado=texto2.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    text3.textContent=textDesencriptado;  
    console.log(text3);


});


