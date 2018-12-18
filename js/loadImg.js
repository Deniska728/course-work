$( function() {
  $( "#tabs" ).tabs();
} );
const loadImg = (id) => {
  const other = document.querySelector(`#${id}`)
  const images = JSON.parse(localStorage.getItem('photos') || "[]")
  const filterImages = images.filter( img => {
    return img.type === `${id}`
  })
  if(filterImages.length > 0){
    filterImages.forEach(filterImage => {
      const img = document.createElement('img')
      img.src = filterImage.src
      other.appendChild(img)
    });
  } else {
    const text = document.createElement('p')
    text.innerHTML = 'У вас нет фотографий данной категории'
    other.appendChild(text)
  }
}
loadImg('selfies')
loadImg('nature')
loadImg('animals')
loadImg('other')