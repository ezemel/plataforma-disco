const getAlbums =  async () => {
    try{
    const response = await axios.get('http://localhost:5000/discos/')
    response.data.map((album)=> {
      renderAlbums(album)})
    }
    catch(error){
      // Aviso de error al cargar los albums
    }
  }

  const renderAlbums = (album) => {
    const div = document.getElementsByClassName('grid grid-cols-3 gap-4 mt-12 py-30')[0]
    const newDiv = document.createElement('div')
    newDiv.classList.add('mb-20')
    const img = document.createElement('img')
    img.classList.add('rounded','cursor-pointer')
    img.src= album.img ? album.img : 'https://imgur.com/0uSALUr.png'
    
    div.appendChild(newDiv)
    newDiv.appendChild(img)
    const p = document.createElement('p')
    p.classList.add('text-white','text-center', 'text-xl', 'font-bold')
    p.textContent = album.yearOfRelease
    newDiv.appendChild(p)
  }

  async function obtenerAlbum(params) {
    try {
        const TítuloAlbum = document.querySelector(".TítuloAlbum")
        const response = await axios.get("http://localhost:5000/discos/discos/")
        
        TítuloAlbum.textContent = response.data.TítuloAlbum
        
        console.log(response)
    } catch (error) {
        console.log(error)
    }
  }

  function renderAlbum(album){
    const div = document.getElementById("view-album")
    const h1 = document.createElement('h1')
    h1.classList.add('text-white', 'text-5xl', 'mt-20', 'mb-4', 'ml-4','font-bold')
    h1.textContent= album.title
    div.appendChild(h1)
    const p = document.createElement('p')
    p.classList.add('text-white', 'mb-4', 'ml-4', 'w-1/2')
    p.textContent= album.description
    div.appendChild(p)
 }

  obtenerAlbum("6732e80ef6f624e6894853db")

  //renderAlbum("6732e80ef6f624e6894853db")

  //renderAlbums()

  // const newDiv = document.createElement('div')
  // newDiv.classList.add('mb-20')
  // const img = document.createElement('img')
  // img.classList.add('rounded','cursor-pointer')
  // img.src= album.img ? album.img : 'https://imgur.com/0uSALUr.png'