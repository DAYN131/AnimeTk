var Nombre;
var Edad;
var password;

finish.onclick = function(e){
    Nombre = document.getElementById("Nombre").value;
    Edad= document.getElementById("Edad").value;
    password = document.getElementById("Password").value;
    patreon();
}


function patreon(){

    if(Nombre===""|| Edad===""|| password ==="" ){
        alert("Favor de llenar los datos");

    }else{

        var patreon = "";
    
         patreon += Nombre[0];
     
         for(let i=0; i <=password.length-1; i++){ 
     
             if(password[i]== "a"|| password[i]=="e"|| password[i]=="i"||password[i]=="o"||password[i]=="i" ||password[i]=="u"){
                 patreon+= password[i];   
                 break;                 
           }
     
        }

        patreon+= Edad;
    
        alert( "Bienvenido user: " + patreon.toUpperCase());
       


    }//else

   

    } //fin de la funcion
  
    
   
    
    
 



  


    




