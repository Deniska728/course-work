
const handleSubmit = e => {
  e.preventDefault()
  let selected = $('select[name="categories"]').val()
  if ( $('#dropbox img').length > 0) {
    const photos = JSON.parse(localStorage.getItem('photos') || "[]")
    const src = $('#dropbox img').prop('src')
    const photo = {
      id: Date.now(),
      type: selected,
      src: src
    }
    photos.push(photo)
    localStorage.setItem('photos', JSON.stringify(photos))
    $('#dropbox > img').remove()
    $('#dropbox').append('<p>Перетащите сюда фотографию</p>')
    $('<img>', { src }).appendTo(`#${selected}`)
    $(`#${selected}`).find('p').remove()  
  }
}

$('form').on('submit', handleSubmit)