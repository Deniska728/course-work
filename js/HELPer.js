$( function() {
  //Табы, взятые из JQuery UI для галереи
  $( "#tabs" ).tabs();
  /*Загрузка изображений*/
  loadImg('selfies')
  loadImg('nature')
  loadImg('animals')
  loadImg('other')
  removeImg()
} );


/*Удаляет фото из localStorage и галереи*/
const removeImg = () =>{
    $('.remove-img').on('click', function(){

      let category = $(this).parent().parent().attr('id')
      $(this).parent().remove()
      
      //получили все изображения
      const photos = JSON.parse(localStorage.getItem('photos') || "[]")
      let id = $(this).parent().attr('id')

      //нашли нужное изображение по id родителя
      for(let photo of photos){
        if(photo['id'] == id){
          //удалили из массива объект, с которым совпало id
          photos.splice(photos.indexOf(photo), 1)
        }
      }
      //возвращаем в localStorage обновлённый массив
      localStorage.setItem('photos', JSON.stringify(photos))
      //если не осталось фотографий, то вставляется текст
      if($(`#tabs #${category} img`).length === 0){
        $(`#${category}`).html('<p>У вас нет фотографий данной категории</p>')
      }

    })
}

/* открытие модального окна по клику на изображение */
const openModal = () =>{
  $( "#tabs img" ).on( "click", function(e) {
    $( "#dialog-confirm" ).html('<div><img alt=""></div>')
    $( "#dialog-confirm" ).dialog( "open" )
    $( "#dialog-confirm" ).find('img').attr('src', e.target.src)
    /* закрытие по клику на overlay */
    $(".ui-widget-overlay").on('click', function(){
        $( "#dialog-confirm" ).dialog( "close" );
    })
  });
}
/* Выгружает фотографии из localStorage в галерею*/
const loadImg = (id) => {

  //массив изображений
  const images = JSON.parse(localStorage.getItem('photos') || "[]")

  //фильтр в зависимости от категории
  const filterImages = images.filter( img => {
    return img.type === `${id}`
  })

  //вставка в галерею
  if(filterImages.length > 0){
    filterImages.forEach(filterImage => {
      $(`<div id="${filterImage.id}">
            <img src="${filterImage.src}">
            <button class="remove-img">x</button>
        </div>`).appendTo(`#${id}`)
    });
  } else {
    $(`#${id}`).html("<p>У вас нет фотографий данной категории</p>")
  }
}

