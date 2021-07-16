var $addEntry = document.querySelector(".add-entry-btn");
var $modal = document.querySelector(".modal")
var $modalSubmit = document.querySelector(".modal-form-submit")




function openModal(event){
  $modal.className = "modal";
}
function closeModal(event){
  $modal.className = "modal hidden"
}










$addEntry.addEventListener("click", openModal);
