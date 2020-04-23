// Declarativas

function miFuncion(){
   return 3;
}

// Expresion

var miFuncion = function(a,b){
   return a + b;
}

miFuncion(3,4);

///
function saludarEstudante(estudiante){
   console.log(estudiante);
}
saludarEstudante("Daniela")

function saludarEstudante(estudiante){
   console.log(`Hola ${estudiante}`);
}
saludarEstudante("Daniela")