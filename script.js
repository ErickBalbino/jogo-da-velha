let modal = document.getElementById("modal-help");
let btnOpenModal = document.getElementById("help-icon");
let btnCloseModal = document.getElementById("close-modal");
let body = document.getElementById("body");

btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);

function openModal(){
    modal.style.display = "block";
    body.style.opacity = "0.2";
    body.style.pointerEvents = "none";
}

function closeModal(){
    modal.style.display = "none";
    body.style.opacity = "1";
    body.style.pointerEvents = "all";
}