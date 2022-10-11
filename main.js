const dropArea = document.getElementById("drop-zone");
const filesDropped = document.getElementById("files-dropped");

dropArea.addEventListener("dragenter", dragenter, false);
dropArea.addEventListener("dragover", dragover, false);
dropArea.addEventListener("drop", drop, false);
dropArea.addEventListener("dropleave", dropleave, false);

function dragenter(event) {
  event.stopPropagation();
  event.preventDefault();
}

function dropleave(event) {
  event.stopPropagation();
  event.preventDefault();
}

function dragover(event) {
  event.stopPropagation();
  event.preventDefault();
}

let files = [];
function drop(event) {
  event.stopPropagation();
  event.preventDefault();

  const data = event.dataTransfer;
  files = data.files;

  handleFiles(files);
}

const uploadTitle = document.getElementById("uploadTitle");
let displayList = "";
function handleFiles(files) {
  for (let counter = 0; counter < files.length; counter++) {
    displayList += `<li>${files[counter].name}</li>`;
  }

  uploadTitle.style.display = "none";
  filesDropped.innerHTML = displayList;
}

//Modal para el error
const modalErrorOpen = document.getElementById("upload-button");
const modalError = document.getElementById("modal-error");
const closeModalError = document.getElementById("close-modal-error");

  if (modalErrorOpen) {
    modalErrorOpen.onclick = () => {
      modalError.style.display = "block";
      modalError.style.height = "100%";
      modalError.style.overflow = "hidden";
    };
  }
  closeModalError.onclick = () => {
    modalError.style.display = "none";
  };


// Modal para el login
const modalClick = document.getElementById("login-button");
const modalLogin = document.getElementById("modal-login");
const closeModal = document.getElementById("close-modal");

if (modalClick) {
  modalClick.onclick = () => {
    modalLogin.style.display = "block";
    modalLogin.style.height = "100%";
    modalLogin.style.overflow = "hidden";
  };

  closeModal.onclick = () => {
    modalLogin.style.display = "none";
  };
}
