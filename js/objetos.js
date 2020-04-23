let miAuto = {
   // clave:"valor"
   marca:"Toyota",
   modelo:"Corolla",
   anio:2020,
   // propiedad - funcion
   detalleDelAuto: function(){
      // "this" es una variable que hace referencia al objeto
      console.log(`Auto ${this.modelo} ${this.anio} es de la marca ${this.marca}`);
   }
};

// acceder a los objetos
console.log(miAuto.marca);
console.log(miAuto.anio);
console.log(miAuto.modelo);
console.log(miAuto.detalleDelAuto());

/// Generar Funcion Constructora

function auto (marca, modelo, anio){
   this.marca = marca;
   this.modelo = modelo;
   this.anio = anio;
}

let autoNuevo = new auto("Tesla", "Model 3", 2020);
console.log(autoNuevo);
let autoNuevo2 = new auto("Tesla", "Model x", 2018);
console.log(autoNuevo2);
let autoNuevo3 = new auto("Mazda", "Coron", 2019);
console.log(autoNuevo3);




