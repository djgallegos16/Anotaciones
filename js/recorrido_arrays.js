let articulos = [
   {nombre:"Bici", costo:3000},
   {nombre:"TV", costo:2500},
   {nombre:"Libro", costo:320},
   {nombre:"celular", costo:10000},
   {nombre:"Laptop", costo:20000},
   {nombre:"Teclado", costo:500},
   {nombre:"Audifonos", costo:1700},
];

// filter agrega a un nuevo array los articulos que encuentra
let articulosFiltrados = articulos.filter(function(articulo){
   // regresa todos los articulos que tienen un costo menor o igual a 500
   return articulo.costo <= 500
})

// map mapea todo el contenido y regresa solo lo que se busca
let nombreArticulo = articulos.map(function(articulo){
   // regresa el nombre de los articulos
   return articulo.nombre
})

// find encuentra algo dentro del array, si existe regresa caso contrario no
let encuentraArticulo = articulos.find(function(articulo){
   return articulo.nombre === "Laptop"
})

// forEach regresa los valores de lo que se busca
articulos.forEach(function(articulo){
   console.log(articulo.nombre);
})

// some rergesa la validacion de verdadero o falso para lo que cumpla dicha funcion
let articulosBaratos = articulo.some(function(articulo){
   return articulo.costo <= 700;
})

