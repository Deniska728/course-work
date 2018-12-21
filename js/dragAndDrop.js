const dbx = $("#dropbox")

/* Вещаем события для Drag'n'Drop на drop-область
*  dragover - событие срабатывает каждые 350мс, когда перемещаемый элемент 
*  над зоной, принимающей элементы
* dragenter - Срабатывает, когда перемещаемый элемент попадает на элемент-назначение.
* Обработчик этого события показывает, что элемент находится над объектом на который он может быть перенесен.
*  drop - запускается при отпускании перетаскиваемого элемента над принимающей областью
*/
$(function(){
  dbx.on('dragover', prevent)
  dbx.on('dragenter', prevent)
  dbx.on('drop', drop)
})

/*
**  Считывает данные с перетаскиваемого файла и создаёт img в #dropbox
*/
const drop = e => {
  prevent(e)
  // получение поля files из объекта dataTransfer в котором хранится информация о перемещаемом файле
  const { files } = e.originalEvent.dataTransfer
  handleFiles(files)
  //проверка на наличие текста в принимающей зоне. Если есть, то удаляет
  if (dbx.find('p').length > 0) dbx.find('p').remove()
}

/*
*  Функция, отменяющая события по умолчанию и вслытие
*/
const prevent = e => {
  e.preventDefault()
  e.stopPropagation()
}

/*
*  Функция, которая создаёт изображение исходя из данных о перетаскиваемом файле
*  и добавляет это изображение в область drop-а
*/
const handleFiles = files => {
  for (file of files) {
    let img = $('<img>', {})

    /*
    *  Объект FileReader позволяет веб-приложениям асинхронно читать содержимое файлов,
    *  хранящиеся на компьютере пользователя, используя объекты File или Blob
    */
    const reader = new FileReader()
    reader.onloadend = function () {
      img.attr('src', reader.result)
    }

    //читает содержимое файла
    reader.readAsDataURL(file)

    //проверка на наличие изображения в принимающей зоне. Если есть, то удаляет
    if (dbx.children().length > 0) dbx.children().remove()
    dbx.append(img)
  }
}