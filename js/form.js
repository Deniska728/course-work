/*
  Обработка формы. Получает данные из localStorage, добавляет новую фотографию
  и обновляет localStorage
*/
const handleSubmit = e => {
  e.preventDefault()
  let selected = $('select[name="categories"]').val()
  //Проверка на наличие изображения в #dropbox
  if ( $('#dropbox img').length > 0) {

    //получение данных
    const photos = JSON.parse(localStorage.getItem('photos') || "[]")
    const src = $('#dropbox img').prop('src')
    let photoId =  Date.now()

    //создание объекта с информацией о добавляемой фотографии
    const photo = {
      id: photoId,
      type: selected,
      src: src
    }

    //Добавление нового элемента в массив фотографий
    photos.push(photo)

    //Конструкция, позволяющая обрабатывать ошибку переполнения памяти 
    //в localStorage (max объём 5-10мб)
    try {
      //Добавляем изменённый массив в localStorage
      localStorage.setItem('photos', JSON.stringify(photos))
   
      //очищаем область с изображением
      $('#dropbox > img').remove()
      $('#dropbox').append('<p>Перетащите сюда фотографию</p>')

      //создаём фотографию в галерее по id
      $(`<div id="${photoId}">
          <img src="${src}">
          <button class="remove-img">x</button>
        </div>`).appendTo(`#${selected}`)
      $(`#${selected}`).find('p').remove()
    } catch (error) {
      alert('Память заполнена. Удалите изображение из альбома и попробуйте заново')
    }

    // Добавляем возможность удаления и открытия модального укна новому изображению  
    openModal()
    removeImg()
  } else {
    alert('Вы не перенесли изображение')
  }
}

$('form').on('submit', handleSubmit)