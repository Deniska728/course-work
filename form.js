
const handleSubmit = e => {
  let selected = $('select[name="categories"]').val()
  if ( $('#dropbox img').length > 0) {
    const photos = JSON.parse(localStorage.getItem('photos') || "[]")
    const photo = {
      id: Date.now(),
      type: selected,
      src: $('#dropbox img').prop('src')
    }
    photos.push(photo)
    localStorage.setItem('photos', JSON.stringify(photos))
  }
}

$('form').on('submit', handleSubmit)