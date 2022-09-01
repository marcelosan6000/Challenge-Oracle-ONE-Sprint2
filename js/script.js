
var palabraVista;

function recargar(){

    location.reload();
    

}

function imprimirArray(){
  
    palabra=['AUTOMOVIL','BARCO','AVION','MANZANA','LIMON','LUCIERNAGA','MURCIELAGO','ORNITORRINCO','BUFALO','COCODRILO'];
    x = Math.floor(Math.random() * palabra.length)
    
    palabraVista = palabra[x];
    let letraInicial = 0;
    //document.getElementById("letra").innerHTML = palabraVista;
   
       
     letrasSplit = palabra[x].split("");
    //var e=document.getElementById("entrada").value

    
    crearDiv();
   // document.getElementById("entrada").focus();

}

function crearDiv(){
for(i = 0;i<palabra[x].length;i++){
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode(" _ ");
    newDiv.appendChild(newContent); //añade texto al div creado.
    newDiv.setAttribute("class","Oculta");
    newDiv.setAttribute("id","Div"+i);
    // añade el elemento creado y su contenido al DOM
    var currentDiv = document.getElementById("po");
    document.body.insertBefore(newDiv, currentDiv);
    sonido_teclas();    

}
}
function muestraLetra(){
    letraPropuesta = document.getElementById("entrada").value;
    largoPalabra = palabraVista.length;

   for(i = 0;i<largoPalabra;i++){
    if(letraPropuesta===letrasSplit[i]){
        document.getElementById("Div"+i).innerText = letraPropuesta;
        document.getElementById("entrada").value="";
        document.getElementById("entrada").focus();
        document.getElementById("estado").innerText="Acertaste"
        
     }
        if(letraPropuesta!==letrasSplit[i]){
       
        document.getElementById("entrada").value="";
        document.getElementById("entrada").focus();
        document.getElementById("estado").innerText="Erraste"
     }
   
    }
     
     

}






/*-----------------------------------------------------------------------*/
function cambiarImagen(){
    var imagen =  document.getElementById("body");
    imagen.style.backgroundImage = "url('/img/pared.jpg')"; 

}

function leer_letras(){
    let letra = document.getElementById("entrada-letras").value;
    document.getElementById('parrafo').innerHTML = letra;
    let palabra = document.getElementById('parrafo').value;
    document.getElementById("entrada-letras").value="";
}
/*------------------------------------------------------------------------------*/

function sonido_teclas(){
    const music = new Audio('audio/click2.mp3');
    music.play();
}
/*------------------------------------------------------------------------------*/

function sonido_reset(){
    const music = new Audio('audio/windows-usb.mp3');
    music.play();
}
/*------------------------------------------------------------------------------*/

function cambiarFondoPared(){
   var imagen =  document.getElementById("body");
   imagen.style.backgroundImage = "url('/img/pared.jpg')"; 
    document.getElementById('teclado1').style.visibility = "visible"; // mostrar
    document.getElementById('teclado2').style.visibility = "visible"; // mostrar
    document.getElementById('teclado3').style.visibility = "visible"; // mostrar
    document.getElementById('horca').style.visibility = "visible"; // mostrar
    document.getElementById('status').style.visibility = "visible"; // mostrar

    imprimirArray();
}
/*------------------------------------------------------------------------------*/

function cambiarFondoCastillo(){
    var imagen =  document.getElementById("body");
    imagen.style.backgroundImage = "url('/img/castillo.jpg')";
   document.getElementById('teclado1').style.visibility = "hidden"; // ocultar
   document.getElementById('teclado2').style.visibility = "hidden"; // ocultar
   document.getElementById('teclado3').style.visibility = "hidden"; // ocultar
   document.getElementById('horca').style.visibility = "hidden"; // ocultar
   document.getElementById('status').style.visibility = "hidden"; // ocultar

 
 }

function teclaA(){
   document.getElementById("entrada-letras").value = "A";
   cambiarFondoCastillo();
   sonido_teclas();

}
function teclaB(){
    document.getElementById('foto').src="/img/acusado1.png";
    
    console.log('B');
    sonido_teclas();
    document.getElementById('foto').src="/img/AHORCADO1.png";
}   
function teclaC(){
    console.log('C');
    document.getElementById('foto').src="/img/AHORCADO2.png";
}
function teclaD(){
    console.log('D');
    document.getElementById('foto').src="/img/AHORCADO3.png";
}
function teclaE(){
    console.log('E');
    document.getElementById('foto').src="/img/AHORCADO4.png";
}
function teclaF(){
    console.log('F');
    document.getElementById('foto').src="/img/AHORCADO5.png";
}
function teclaG(){
    console.log('G');
    document.getElementById('foto').src="/img/AHORCADO6.png";
}
function teclaH(){
    console.log('H');
    document.getElementById('foto').src="/img/AHORCADO7.png";
}
function teclaI(){
    console.log('I');
    document.getElementById('foto').src="/img/feliz.png";
}
function teclaJ(){
    //console.log('J');
    imprimirArray();
}
function teclaK(){
    console.log('K');
    
}
function teclaL(){
    console.log('L');
}
function teclaM(){
    console.log('M');
}
function teclaN(){
    console.log('N');
}
function teclaÑ(){
    console.log('Ñ');
}
function teclaO(){
    console.log('O');
}
function teclaP(){
    console.log('P');
}
function teclaQ(){
    console.log('Q');
}


