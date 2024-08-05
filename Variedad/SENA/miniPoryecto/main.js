const url ='http://localhost:3000/api/articulos/';
const contenedor = document.querySelector('tbody');
let resultados ='';
const modalArticulo = new bootstrap.Modal(document.getElementById('modalArticulo'));
const formArticulo = document.querySelector('form'); // Agrega comillas
const descripcion = document.querySelector('#descripcion'); // Agrega comillas y # para IDs
const precio = document.querySelector('#precio'); // Agrega comillas y # para IDs
const stock = document.querySelector('#stock'); // Agrega comillas y # para IDs
let opcion ='';

const btnCrear = document.getElementById('btnCrear'); // Agrega esta línea para seleccionar el botón

btnCrear.addEventListener('click', () => { 
    descripcion.Value='';
    descripcion.Value='';
    descripcion.Value='' ;
    //Agrega el evento click para el botón
    modalArticulo.show();
    opcion='crear'
});
//Funcion para mostrar resultados
const mostrar = (articulos ) => {
    articulos.forEach(articulo=>{
        resultados += `
        <tr>
            <td>${articulo.id}</td>
            <td>${descripcion.id}</td>
            <td>${precio.id}</td>
            <td>${stock.id}</td>
            <td class="text-center"><a class"btnBorrar btn btn-primary">Borrar</a></td>
        </tr>
        `
    })
    contenedor.innerHTML = resultados
    }
    
//Procedimiento para mostrar
fetch(url)
.then(Response=>Response.json())
.then( data => mostrar(data) )
.catch(error => console.log(error))
