(function(){
    /*OBJETOS Y FUNCIONALIDADES */
   var app = document.getElementById("app");
   var inputCaracteres = document.getElementById("numero-caracteres");
   
   var configuracion = {
       caracteres: parseInt(inputCaracteres.value),
       simbolos: true,
       numeros: true,
       mayusculas: true,
       minusculas: true
   }
   var caracteres = {
       numeros: '0 1 2 3 4 5 6 7 8 9',
       simbolos:': @ ? ! # % /',
       mayusculas: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
       minusculas: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
    }

    //EVENTOS
    /*------------------------- */

    //Evento para evitar que carguen los elementos
    app.addEventListener('submit', function(e){
        e.preventDefault();

    });

   app.elements.namedItem('btn-mas-uno').addEventListener('click',function(){
       configuracion.caracteres++;
       inputCaracteres.value = configuracion.caracteres;
   });

   app.elements.namedItem('btn-menos-uno').addEventListener('click',function(){
       if (configuracion.caracteres > 1) {
        configuracion.caracteres--;
        inputCaracteres.value = configuracion.caracteres;
           
       }
    
});
//FUNCIONES
app.elements.namedItem('btn-simbolos').addEventListener('click', function(){
    btnToggle(this);
    configuracion.simbolos = !configuracion.simbolos;
    //console.log(configuracion.simbolos);
});
app.elements.namedItem('btn-numeros').addEventListener('click', function(){
    btnToggle(this);
    configuracion.numeros = !configuracion.numeros;
    console.log(configuracion.numeros);
});
app.elements.namedItem('btn-mayusculas').addEventListener('click', function(){
    btnToggle(this);
    configuracion.mayusculas = !configuracion.mayusculas;
    console.log(configuracion.mayusculas);
});
app.elements.namedItem('btn-generar').addEventListener("click",function(){
 generarPasword();
});
app.elements.namedItem('input-password').addEventListener("click", function(){
    copiarPassword();
});

//FUNCION QUE SE EJECUTA
function btnToggle(elemento){
    elemento.classList.toggle("false");
    elemento.childNodes[0].classList.toggle("fa-check");
    elemento.childNodes[0].classList.toggle("fa-times");
}

function generarPasword(){
    //Aqui se van a guardar las cadenas de texto
   var caracteresFinales = " ";
   var password = " ";

   for (propiedad in configuracion) {
       // se Accede a los objetos y sus propiedades
       if (configuracion[propiedad] == true) {
           caracteresFinales += caracteres[propiedad]+ " ";
           
           
       }
       
       
   }
   caracteresFinales = caracteresFinales.trim();
   caracteresFinales = caracteresFinales.split(' ');
   
for (var i = 0; i < configuracion.caracteres; i++) {
   
    password += caracteresFinales[Math.floor(Math.random()* caracteresFinales.length)];
}

app.elements.namedItem("input-password").value = password;
}
function copiarPassword(){
    app.elements.namedItem("input-password").select();
    document.execCommand('copy');//se copia en automatico
    document.getElementById("alerta-copiado").classList.add('active');

    setTimeout(function(){
        document.getElementById("alerta-copiado").classList.remove('active');
    },2000);
}

generarPasword();






   
}());