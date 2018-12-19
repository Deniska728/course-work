$( function() {
  $( "#tabs" ).tabs();
} );
const loadImg = (id) => {
  const images = JSON.parse(localStorage.getItem('photos') || "[]")
  const filterImages = images.filter( img => {
    return img.type === `${id}`
  })
  if(filterImages.length > 0){
    filterImages.forEach(filterImage => {
      $(`<div>
            <img src="${filterImage.src}">
            <button class="remove-img">x</button>
        </div>`).appendTo(`#${id}`)
    });
  } else {
    $(`#${id}`).html("<p>У вас нет фотографий данной категории</p>")
  }
}
loadImg('selfies')
loadImg('nature')
loadImg('animals')
loadImg('other')