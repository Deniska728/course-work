const dbx = document.querySelector("#dropbox")
window.onload = () => {
  dbx.addEventListener('dragover', prevent, false)
  dbx.addEventListener('dragenter', prevent, false)
  dbx.addEventListener('drop', drop, false)
}

const drop = e => {
  prevent(e)
  const { files } = e.dataTransfer
  handleFiles(files)
  console.log(dbx.firstElementChild)
  if (dbx.firstElementChild.tagName === "P") {
    dbx.removeChild(dbx.firstElementChild)
  }
}

const prevent = e => {
  e.preventDefault()
  e.stopPropagation()
}

const handleFiles = files => {
  for (file of files) {
    let img = document.createElement('img')
    const reader = new FileReader()
    reader.onloadend = function () {
      img.src = reader.result
    }
    reader.readAsDataURL(file)
    if (dbx.firstElementChild) {
      dbx.removeChild(dbx.firstElementChild)
    }
    dbx.appendChild(img)
  }
}