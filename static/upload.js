const dropZone = document.querySelector(".upload_dropzone");
const upload_dropzone = document.querySelector(".upload_dropzone");
const input = document.querySelector(".input");
const browsebtn = document.querySelector(".browsebtn");
const downloadLink = document.querySelector(".upload_download_link");

const dragActionHandler = (e) => {
    e.preventDefault();
    if (!dropZone.classList.contains("dragged")) {
        dropZone.classList.add("dragged")
    }
    if (!upload_dropzone.classList.contains("dragged")) {
        upload_dropzone.classList.add("dragged")
    }
}
const dragActionLeave = (e) => {
    dropZone.classList.remove("dragged")
}
const dragActionDrop = (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragged")
    const files = e.dataTransfer.files;
    if (files.length) {
        input.files = files;
    }
    console.log(input.files[0])
        
}
const handleClick = (e) => {
    e.preventDefault();
    if (input.value) {
        uploadData();
        input.value = "";
    }
  
   
}
dropZone.addEventListener("dragover", dragActionHandler);
dropZone.addEventListener("dragleave", dragActionLeave);
dropZone.addEventListener("drop", dragActionDrop);
browsebtn.addEventListener('click',handleClick)


const uploadData = () => {
    let data = new FormData()
    data.append('myfile', input.files[0]);
    fetch('/api/file', {
        method: 'POST',
        body: data
    }).then(res=>res.json())
        .then(res => {
            downloadLink.innerHTML = res.file;
        console.log('Response: ->', res);
      })
      .catch(err => {
        // Handle error 
        console.log('Error message: ', err);
      });
}