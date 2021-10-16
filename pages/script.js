function validaForm(event){
    event.preventDefault()//esto permite que el formulario no se refresque cuando hagamos click
   
    const r1=document.getElementById("p1").checked;
    const r2=document.getElementById("p2").checked;
    const r3=document.getElementById("p3").checked;
    const r4=document.getElementById("p4").checked;

    if (r1){
        alert ("Has acertado, pulsa siguiente");
        window.location.href="./quiz2.html";
    }
        
    else if (!r1 && !r2 && !r3 && !r4 ) {
        alert ("No olvides responder");
    }
    else {
        alert ("ooooh! Inténtalo de nuevo");
       
    }
}
    
 document.getElementById("bottom_index").addEventListener("click",validaForm)

 //ocultar y mostrar contenido
 function showindex(){
    document.getElementById("index").style.display='';
    document.getElementById("formulario_1").style.display='none';
    document.getElementById("formulario_2").style.display='none';
 }

 function showForm1(){
    document.getElementById("index").style.display='none';
    document.getElementById("formulario_1").style.display='';
    document.getElementById("formulario_2").style.display='none';
    
 }
 function showForm2(){
    document.getElementById("index").style.display='none';
    document.getElementById("formulario_1").style.display='none';
    document.getElementById("formulario_2").style.display='';
    
 }

