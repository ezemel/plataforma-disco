
// async function createAlbum(){
//     // const titulo = input.value
//     try {
//         const response = await axios.post('http://localhost:3000/discos/discos', {
//             titulo: input.value,
//             precio: 5640
//         })


//         console.log(response.data)
//     } catch (error) {
//         console.log(error)
//     }
// }

async function createAlbum(){
    // const titulo = input.value
    try {

        var varTituloAlbum = document.querySelector(".tituloAlbum")
        var varDescripcion = document.querySelector(".descripcion")
        var varAnioVenta = document.querySelector(".anioVenta")
        var varPortada = document.querySelector(".portada")

        const response = await axios.post('http://localhost:5000/discos/discos', {
            TituloAlbum: varTituloAlbum.value,
            Descripcion: varDescripcion.value,
            AnioVenta: varAnioVenta.value,
            Portada: varPortada.value
        })


        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

document.querySelector(".createAlbumButton").addEventListener("click",createAlbum)