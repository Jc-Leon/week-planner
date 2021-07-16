var $addEntry = document.querySelector('.add-entry-btn');
var $modal = document.querySelector('.modal');
var $modalSubmit = document.querySelector('.modal-form-submit');
var $days = document.querySelectorAll('.dayofweek');
var $week = document.querySelector('.week');
var $scheduledEvents = document.querySelector('.scheduled-events');

function openModal(event) {
  $modal.className = 'modal';
}
function closeModal(event) {
  $modal.className = 'modal hidden';
}

function switchDays(day) {
  var label = 'Scheduled Events For ';
  $scheduledEvents.textContent = label + day;
}

$week.addEventListener('click', function (event) {
  if (!event.target.matches('.dayofweek')) {
    return;
  }
  switchDays(event.target.textContent);
});
$modalSubmit.addEventListener('click', closeModal);
$addEntry.addEventListener('click', openModal);
