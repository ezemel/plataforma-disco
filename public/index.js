const getAlbums = async () => {
  try {
    const response = await axios.get('http://localhost:5000/discos/discos/');
    const albums = response.data;

    if (!albums || albums.length === 0) {
      console.log("No hay álbumes disponibles para mostrar");
      return;
    }

    albums.forEach(album => renderAlbums(album));
  } catch (error) {
    //console.error("Error al cargar los álbumes:", error.message);
    console.error("Error al cargar los álbumes:");
  }
};

const renderAlbums = (album) => {
  const container = document.querySelector('.grid.grid-cols-3.gap-4.mt-12.py-30');
  if (!container) {
    console.error("Contenedor no encontrado. Asegúrate de que exista un elemento con la clase 'grid grid-cols-3 gap-4 mt-12 py-30'.");
    return;
  }

  const newDiv = document.createElement('div');
  newDiv.classList.add('mb-20');

  const img = document.createElement('img');
  img.classList.add('rounded', 'cursor-pointer');
  img.src = album.Portada || 'https://imgur.com/0uSALUr.png';

  const p_TituloAlbum = document.createElement('p');
  p_TituloAlbum.classList.add('text-white', 'text-center', 'text-xl', 'font-bold');
  p_TituloAlbum.textContent = album.TituloAlbum || 'Album desconocido';

  const p_AnioVenta = document.createElement('p');
  p_AnioVenta.classList.add('text-white', 'text-center', 'text-xl', 'font-bold');
  p_AnioVenta.textContent = album.AnioVenta || 'Fecha desconocida';

  const p_Descripcion = document.createElement('p');
  p_Descripcion.classList.add('text-white', 'text-center', 'text-xl', 'font-bold');
  p_Descripcion.textContent = album.Descripcion || 'Sin descripción';

  // Inserción eficiente al DOM
  newDiv.appendChild(img);
  newDiv.appendChild(p_TituloAlbum);
  newDiv.appendChild(p_AnioVenta);
  newDiv.appendChild(p_Descripcion);
  container.appendChild(newDiv);
};

// Ejecuta la función al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  getAlbums();
});



// const button = document.querySelector('.obtenerAlbum')
// const p_TituloAlbum = document.querySelector('.TituloAlbum')
// const img = document.querySelector('.portada')
// //img.setAttribute('src','https://www.coldplay.com/wp/wp-content/uploads/2015/11/art_myloxyloto.jpg')
// const input = document.querySelector('.idClase')
// button.addEventListener('click', getAlbums)

// async function getAlbums (){
//   try {
//      const response = await axios.get("http://localhost:5000/discos/discos/" + input.value)
//      console.log(response.data)

//      p_TituloAlbum.textContent = response.data[0].TituloAlbum
//      img.setAttribute('src',response.data[0].Portada)

//   } catch (error) {
//       console.error(error);

//   }
// }

// const getAlbums =  async () => {
//   try{
//   const response = await axios.get('http://localhost:5000/discos/discos/')
//   const albumView = response.data
//   response.data.map((album)=> {
//     renderAlbums(album)})
//   }
//   catch(error){
//     // Aviso de error al cargar los albums
//     console.log("error al cargar los albums")
//   }
// }

// const renderAlbums = (album) => {
//   const div = document.getElementsByClassName('grid grid-cols-3 gap-4 mt-12 py-30')[0]
//   const newDiv = document.createElement('div')
//   newDiv.classList.add('mb-20')
//   const img = document.createElement('img')
//   img.classList.add('rounded','cursor-pointer')
//   img.src= album.img ? album.img : 'https://imgur.com/0uSALUr.png'
  
//   div.appendChild(newDiv)
//   newDiv.appendChild(img)
//   const p = document.createElement('p')
//   p.classList.add('text-white','text-center', 'text-xl', 'font-bold')
//   p.textContent = album.yearOfRelease
//   newDiv.appendChild(p)
// }


//   async function obtenerAlbum() {
//     try {
//         var idClase = document.querySelector(".idClase").value
//         var Portada = document.querySelector(".Portada")
//         const response = await axios.get("http://localhost:5000/discos/discos/" + idClase)
        
//         //TituloAlbum.textContent = response.data[0].TituloAlbum
//         // Portada.textContent = response.data.Portada

//         console.log(response.data[0].Portada)

//         //h2.textContent = response.data[0].TituloAlbum
        
//         //console.log(response)

//         // console.log(response.data.TituloAlbum)
//         //console.log(response.data)
//         //console.log(response.[0].Portada)
//         //console.log(response.data.Portada)

//     } catch (error) {
//         console.log(error)
//     }
//   }

//   // obtenerAlbum("6732e80ef6f624e6894853db")

// document.querySelector(".obtenerAlbum").addEventListener("click",obtenerAlbum)

  