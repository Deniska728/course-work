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
  if(dbx.firstElementChild.tagName === "P"){
    dbx.removeChild(dbx.firstElementChild)
  }
}

const prevent = e => {
  e.preventDefault()
  e.stopPropagation()
}


const handleFiles = files =>{
  for(file of files){
    let img = document.createElement('img')
    img.file = file
    const reader = new FileReader()
    reader.onload = ((aImg) => { return function(e){ aImg.src = e.target.result } })(img)
    reader.readAsDataURL(file)
    dbx.appendChild(img)
  }
}