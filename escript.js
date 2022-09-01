var acierto;
var error;
var err;
var palabraVista;
var letrasFaltantes;
const palabra=['MOLUSCO','AUTOMOVIL','ASTEROIDE','PARALELEPIPEDO','MANZANA','ACRONIMO','LUCIERNAGA','MURCIELAGO','ORNITORRINCO','BUFALO','COCODRILO','PLANTIGRADO','AUTOPISTA','PARTICULA','MONOSILABO'];
//--------------------------------------------------------------------------

function recargar(){
    location.reload();
    document.getElementById("acierto").style.visibility="hidden";
    document.getElementById("error").style.visibility="hidden";
    document.getElementById("entrada").style.visibility="hidden";
    document.getElementById("boton4").style.visibility="hidden";
    document.getElementById("nuevapalabra").style.visibility="hidden";
}
//--------------------------------------------------------------------------
function crearPalabra(){

    document.getElementById("boton1").style.visibility="hidden";
    document.getElementById("acierto").style.visibility="hidden";
    document.getElementById("error").style.visibility="hidden";
    document.getElementById("entrada").style.visibility="hidden";
    document.getElementById("boton4").style.visibility="hidden";
    document.getElementById("nuevapalabra").style.visibility="hidden";
   
//----------------------------------------------------------------------


    
    x = Math.floor(Math.random() * palabra.length)
    palabraVista = palabra[x];
    for(i = 0;i<palabra[x].length;i++){
        letrasSplit = palabra[x].split("");
    
        var newDiv = document.createElement("div");
        var newContent = document.createTextNode(letrasSplit[i]);
        newDiv.appendChild(newContent); //añade guion al div creado.
        newDiv.setAttribute("class","Oculta");
        newDiv.setAttribute("id","Div"+i);
        // añade el elemento creado y su contenido al DOM
        var currentDiv = document.getElementById("teclado1");
        document.body.insertBefore(newDiv, currentDiv);
        console.log(letrasSplit[i]); 
        error = 7;
        letrasFaltantes=0;
        document.getElementById("error").value= error;
}
        document.getElementById("boton1").style.visibility="hidden";

}
//---------------------------------------------------------------------------
function probrarLetra(){
    acierto = 0;
   
    letraPropuesta = document.getElementById("entrada").value;
    largoPalabra = palabraVista.length;

   for(i = 0;i<largoPalabra;i++){
    if(letraPropuesta===letrasSplit[i]){
        document.getElementById("Div"+i).style.color="white";
        document.getElementById("entrada").value="";
        //document.getElementById("entrada").focus();
        acierto = acierto+1 ;
        document.getElementById("acierto").value = acierto;
    }
    if(letraPropuesta!==letrasSplit[i]){
        document.getElementById("entrada").value="";
        //document.getElementById("entrada").focus();
           
    }
    }
    letrasFaltantes= letrasFaltantes + acierto;
   
    
}
//----Teclado----------------------------------------------------------------
function teclaA(){
    document.getElementById("entrada").value="A";
    probrarLetra();
   if (acierto>0){
        var b = document.getElementById("t1"); 
        b.style.backgroundColor ="green";
        b.disabled = true;
        sonido_click();  
        conteoLetras();
    }
    if (acierto===0){
        var b = document.getElementById("t1"); 
        b.style.backgroundColor ="red";
        b.disabled = true; 
        conteoVidas();
        }
}
function teclaB(){
    document.getElementById("entrada").value="B";
    probrarLetra();
   if (acierto>0){
        var b = document.getElementById("t2"); 
        b.style.backgroundColor ="green";
        b.disabled = true; 
        sonido_click();
        conteoLetras();
    }
    if (acierto===0){
        var b = document.getElementById("t2"); 
        b.style.backgroundColor ="red";
        b.disabled = true; 
        conteoVidas();
        }
}
function teclaC(){
    document.getElementById("entrada").value="C";
    probrarLetra();
   if (acierto>0){
        var b = document.getElementById("t3"); 
        b.style.backgroundColor ="green";
        b.disabled = true; 
        sonido_click();
        conteoLetras();
    }
    if (acierto===0){
        var b = document.getElementById("t3"); 
        b.style.backgroundColor ="red";
        b.disabled = true;  
        conteoVidas();
        }
}
function teclaD(){
    document.getElementById("entrada").value="D";
    probrarLetra();
   if (acierto>0){
        var b = document.getElementById("t4"); 
        b.style.backgroundColor ="green";
        b.disabled = true; 
        sonido_click();
        conteoLetras();
    }
    if (acierto===0){
        var b = document.getElementById("t4"); 
        b.style.backgroundColor ="red";
        b.disabled = true; 
        conteoVidas();
        }
}
function teclaE(){
    document.getElementById("entrada").value="E";
    probrarLetra();
   if (acierto>0){
        var b = document.getElementById("t5"); 
        b.style.backgroundColor ="green";
        b.disabled = true; 
        sonido_click();
        conteoLetras();
    }
    if (acierto===0){
        var b = document.getElementById("t5"); 
        b.style.backgroundColor ="red";
        b.disabled = true; 
        conteoVidas();
        }
}
function teclaF(){
    document.getElementById("entrada").value="F";
    probrarLetra();
   if (acierto>0){
        var b = document.getElementById("t6"); 
        b.style.backgroundColor ="green";
        b.disabled = true; 
        sonido_click();
        conteoLetras();
    }
    if (acierto===0){
        var b = document.getElementById("t6"); 
        b.style.backgroundColor ="red";
        b.disabled = true; 
        conteoVidas();
        }
}
function teclaG(){
    document.getElementById("entrada").value="G";
    probrarLetra();
   if (acierto>0){
        var b = document.getElementById("t7"); 
        b.style.backgroundColor ="green";
        b.disabled = true; 
        sonido_click();
        conteoLetras();
    }
    if (acierto===0){
        var b = document.getElementById("t7"); 
        b.style.backgroundColor ="red";
        b.disabled = true; 
        conteoVidas();
        }
}
function teclaH(){
    document.getElementById("entrada").value="H";
    probrarLetra();
   if (acierto>0){
        var b = document.getElementById("t8"); 
        b.style.backgroundColor ="green";
        b.disabled = true; 
        sonido_click();
        conteoLetras();
    }
    if (acierto===0){
        var b = document.getElementById("t8"); 
        b.style.backgroundColor ="red";
        b.disabled = true; 
        conteoVidas();
        }
}
function teclaI(){
    
    document.getElementById("entrada").value="I";
    probrarLetra();

   if (acierto>0){
        var b = document.getElementById("t9"); 
        b.style.backgroundColor ="green";
        b.disabled = true; 
        sonido_click();
        conteoLetras();
    }
    if (acierto===0){
        var b = document.getElementById("t9"); 
        b.style.backgroundColor ="red";
        b.disabled = true; 
        conteoVidas();
        }
}

function teclaJ(){
    
    document.getElementById("entrada").value="J";
    probrarLetra();

   if (acierto>0){
        var b = document.getElementById("t10"); 
        b.style.backgroundColor ="green";
        b.disabled = true; 
        sonido_click();
        conteoLetras();
    }
    if (acierto===0){
        var b = document.getElementById("t10"); 
        b.style.backgroundColor ="red";
        b.disabled = true; 
        conteoVidas();
        }
}
function teclaK(){
    
    document.getElementById("entrada").value="K";
    probrarLetra();

   if (acierto>0){
        var b = document.getElementById("t11"); 
        b.style.backgroundColor ="green";
        b.disabled = true; 
        sonido_click();
        conteoLetras();
    }
    if (acierto===0){
        var b = document.getElementById("t11"); 
        b.style.backgroundColor ="red";
        b.disabled = true; 
        conteoVidas();
        }
}
function teclaL(){
    
    document.getElementById("entrada").value="L";
    probrarLetra();

   if (acierto>0){
        var b = document.getElementById("t12"); 
        b.style.backgroundColor ="green";
        b.disabled = true; 
        sonido_click();
        conteoLetras();
    }
    if (acierto===0){
        var b = document.getElementById("t12"); 
        b.style.backgroundColor ="red";
        b.disabled = true; 
        conteoVidas();
        }
}
function teclaM(){
    
    document.getElementById("entrada").value="M";
    probrarLetra();

   if (acierto>0){
        var b = document.getElementById("t13"); 
        b.style.backgroundColor ="green";
        b.disabled = true; 
        sonido_click();
        conteoLetras();
    }
    if (acierto===0){
        var b = document.getElementById("t13"); 
        b.style.backgroundColor ="red";
        b.disabled = true; 
        conteoVidas();
        }
}
function teclaN(){
    
    document.getElementById("entrada").value="N";
    probrarLetra();

   if (acierto>0){
        var b = document.getElementById("t14"); 
        b.style.backgroundColor ="green";
        b.disabled = true; 
        sonido_click();
        conteoLetras();
    }
    if (acierto===0){
        var b = document.getElementById("t14"); 
        b.style.backgroundColor ="red";
        b.disabled = true; 
        conteoVidas();
        }
}
function teclaÑ(){
    
    document.getElementById("entrada").value="Ñ";
    probrarLetra();

   if (acierto>0){
        var b = document.getElementById("t15"); 
        b.style.backgroundColor ="green";
        b.disabled = true; 
        sonido_click();
        conteoLetras();
    }
    if (acierto===0){
        var b = document.getElementById("t15"); 
        b.style.backgroundColor ="red";
        b.disabled = true; 
        conteoVidas();
        }
}
function teclaO(){
    
    document.getElementById("entrada").value="O";
    probrarLetra();

   if (acierto>0){
        var b = document.getElementById("t16"); 
        b.style.backgroundColor ="green";
        b.disabled = true; 
        sonido_click();
        conteoLetras();
    }
    if (acierto===0){
        var b = document.getElementById("t16"); 
        b.style.backgroundColor ="red";
        b.disabled = true; 
        conteoVidas();
        }
}
function teclaP(){
    
    document.getElementById("entrada").value="P";
    probrarLetra();

   if (acierto>0){
        var b = document.getElementById("t17"); 
        b.style.backgroundColor ="green";
        b.disabled = true; 
        sonido_click();
        conteoLetras();
    }
    if (acierto===0){
        var b = document.getElementById("t17"); 
        b.style.backgroundColor ="red";
        b.disabled = true; 
        conteoVidas();
        }
}
function teclaQ(){
    
    document.getElementById("entrada").value="Q";
    probrarLetra();

   if (acierto>0){
        var b = document.getElementById("t18"); 
        b.style.backgroundColor ="green";
        b.disabled = true; 
        sonido_click();
        conteoLetras();
    }
    if (acierto===0){
        var b = document.getElementById("t18"); 
        b.style.backgroundColor ="red";
        b.disabled = true; 
        conteoVidas();
        }
}

function teclaR(){
    
    document.getElementById("entrada").value="R";
    probrarLetra();

   if (acierto>0){
        var b = document.getElementById("t19"); 
        b.style.backgroundColor ="green";
        b.disabled = true; 
        sonido_click();
        conteoLetras();
    }
    if (acierto===0){
        var b = document.getElementById("t19"); 
        b.style.backgroundColor ="red";
        b.disabled = true; 
        conteoVidas();
        }
}
function teclaS(){
    
    document.getElementById("entrada").value="S";
    probrarLetra();

   if (acierto>0){
        var b = document.getElementById("t20"); 
        b.style.backgroundColor ="green";
        b.disabled = true; 
        sonido_click();
        conteoLetras();
    }
    if (acierto===0){
        var b = document.getElementById("t20"); 
        b.style.backgroundColor ="red";
        b.disabled = true; 
        conteoVidas();
        }
}
function teclaT(){
    
    document.getElementById("entrada").value="T";
    probrarLetra();

   if (acierto>0){
        var b = document.getElementById("t21"); 
        b.style.backgroundColor ="green";
        b.disabled = true; 
        sonido_click();
        conteoLetras();
    }
    if (acierto===0){
        var b = document.getElementById("t21"); 
        b.style.backgroundColor ="red";
        b.disabled = true; 
        conteoVidas();
        }
}
function teclaU(){
    
    document.getElementById("entrada").value="U";
    probrarLetra();

   if (acierto>0){
        var b = document.getElementById("t22"); 
        b.style.backgroundColor ="green";
        b.disabled = true; 
        sonido_click();
        conteoLetras();
    }
    if (acierto===0){
        var b = document.getElementById("t22"); 
        b.style.backgroundColor ="red";
        b.disabled = true; 
        conteoVidas();
        }
}
function teclaV(){
    
    document.getElementById("entrada").value="V";
    probrarLetra();

   if (acierto>0){
        var b = document.getElementById("t23"); 
        b.style.backgroundColor ="green";
        b.disabled = true; 
        sonido_click();
        conteoLetras();
    }
    if (acierto===0){
        var b = document.getElementById("t23"); 
        b.style.backgroundColor ="red";
        b.disabled = true; 
        conteoVidas();
        }
}
function teclaW(){
    
    document.getElementById("entrada").value="W";
    probrarLetra();

   if (acierto>0){
        var b = document.getElementById("t24"); 
        b.style.backgroundColor ="green";
        b.disabled = true; 
        sonido_click();
        conteoLetras();
    }
    if (acierto===0){
        var b = document.getElementById("t24"); 
        b.style.backgroundColor ="red";
        b.disabled = true; 
        conteoVidas();
        }
}
function teclaX(){
    
    document.getElementById("entrada").value="X";
    probrarLetra();

   if (acierto>0){
        var b = document.getElementById("t25"); 
        b.style.backgroundColor ="green";
        b.disabled = true; 
        sonido_click();
        conteoLetras();
    }
    if (acierto===0){
        var b = document.getElementById("t25"); 
        b.style.backgroundColor ="red";
        b.disabled = true; 
        conteoVidas();
        }
}
function teclaY(){
    
    document.getElementById("entrada").value="Y";
    probrarLetra();

   if (acierto>0){
        var b = document.getElementById("t26"); 
        b.style.backgroundColor ="green";
        b.disabled = true; 
        sonido_click();
        conteoLetras();
    }
    if (acierto===0){
        var b = document.getElementById("t26"); 
        b.style.backgroundColor ="red";
        b.disabled = true; 
        conteoVidas();
        }
}
function teclaZ(){
    
    document.getElementById("entrada").value="Z";
    probrarLetra();

   if (acierto>0){
        var b = document.getElementById("t27"); 
        b.style.backgroundColor ="green";
        b.disabled = true; 
        sonido_click();
        conteoLetras();
    }
    if (acierto===0){
        var b = document.getElementById("t27"); 
        b.style.backgroundColor ="red";
        b.disabled = true; 
        conteoVidas();
        }
}


//---Conteo-----------------------------------------------------------------------------------------

function conteoVidas(){
sonido_error();   
document.getElementById("error").value = document.getElementById("error").value -1;
document.getElementById("status").innerHTML="Te quedan : " + document.getElementById("error").value + " intentos..."; 
  var err = document.getElementById("error").value;
  console.log(err);
if(err == 7){
    document.getElementById("status").innerHTML="No era esa letra..."
    document.getElementById("horca").setAttribute("src","")
}

if(err == 6){
    document.getElementById("status").innerHTML="No era esa letra..."
    document.getElementById("horca").setAttribute("src","img/acusado1.svg")
}
if(err == 5){
    document.getElementById("status").innerHTML="Esa letra tampoco..."
    document.getElementById("horca").setAttribute("src","img/acusado2.svg")
}
if(err == 4){
    document.getElementById("horca").setAttribute("src","img/acusado3.svg")
}
if(err == 3){
    document.getElementById("horca").setAttribute("src","img/acusado4.svg")
}
if(err == 2){
    document.getElementById("horca").setAttribute("src","img/acusado5.svg")
}
if(err == 1){
    document.getElementById("horca").setAttribute("src","img/acusado6.svg")
}
if(err == 0){
    document.getElementById("status").innerHTML="PERDISTE..."
    document.getElementById("horca").setAttribute("src","img/acusado7.svg")
    sonido_loser();
    setTimeout(recargar,3000);
}
}
//----------------------------------------------------------------------------------------------------
function conteoLetras(){
       
     var palabraCompleta = largoPalabra-letrasFaltantes;
  
      if(palabraCompleta < 1){
        
        document.getElementById("status").innerHTML="GANASTE !!!"
        document.getElementById("horca").setAttribute("src","img/winner.svg")
       // document.getElementById("status").style.color("green");
        sonido_winner();
        setTimeout(recargar,3000);
      }
    }

//---------------Sonidos-------------------------------------------------------------------------------
function sonido_error(){
    const music = new Audio('audio/errado.mp3');
    music.play();
}
function sonido_click(){
    const music = new Audio('audio/clic.mp3');
    music.play();
}
function sonido_winner(){
    const music = new Audio('audio/winner.mp3');
    music.play();
}
function sonido_loser(){
    const music = new Audio('audio/fracaso.mp3');
    music.play();
} 

//---------------Nuevas Palabras-------------------------------------------------------------------------------

function agregarPalabra(){
    document.getElementById("boton4").style.visibility="visible";
    document.getElementById("nuevapalabra").style.visibility="visible";
}


function botonAgregarPalabra(){ 
    var nueva = document.getElementById("nuevapalabra").value;
    nueva = nueva.toUpperCase();
    palabra.push(nueva);

    console.log(palabra[11], nueva);

    document.getElementById("boton4").style.visibility="hidden";
    document.getElementById("nuevapalabra").style.visibility="hidden";
}
