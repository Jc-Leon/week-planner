/* global data */
/* exported data */
var $addEntry = document.querySelector('.add-entry-btn');
var $modal = document.querySelector('.modal');
var $modalSubmit = document.querySelector('.modal-form-submit');
var $days = document.querySelectorAll('.dayofweek');
var $week = document.querySelector('.week');
var $scheduledEvents = document.querySelector('.scheduled-events');
var $form = document.querySelector('form');

function handleSubmit(event) {
  event.preventDefault();
  var entry = {};
  entry.day = $form.day.value;
  entry.time = $form.time.value;
  entry.description = $form.description.value;
  data[entry.day].entries.push(entry);
  renderEntry(entry);
}

function openModal(event) {
  $modal.className = 'modal';
}
function closeModal(event) {
  $modal.className = 'modal hidden';
}

function switchDays(day) {
  var label = 'Scheduled Events For ';
  $scheduledEvents.textContent = label + day;
  data.view = day.toLowerCase();
}

function renderEntry(entry) {
  var row = document.createElement('tr');
  var time = document.createElement('td');
  time.textContent = entry.time;
  row.appendChild(time);
  var description = document.createElement('td');
  description.textContent = entry.description;
  row.appendChild(description);
  console.log('row', row);

}

$week.addEventListener('click', function (event) {
  if (!event.target.matches('.dayofweek')) {
    return;
  }
  switchDays(event.target.textContent);
});
$modalSubmit.addEventListener('click', closeModal);
$addEntry.addEventListener('click', openModal);
$form.addEventListener('submit', handleSubmit);
// window.addEventListener('DOMContentLoaded');
