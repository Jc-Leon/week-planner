/* global data */
/* exported data */
var $addEntry = document.querySelector('.add-entry-btn');
var $modal = document.querySelector('.modal');
var $modalSubmit = document.querySelector('.modal-form-submit');
var $week = document.querySelector('.week');
var $scheduledEvents = document.querySelector('.scheduled-events');
var $form = document.querySelector('form');
var $schedule = document.querySelectorAll('.schedule');

function handleSubmit(event) {
  event.preventDefault();
  var entry = {};
  entry.day = $form.day.value;
  entry.time = $form.time.value;
  entry.description = $form.description.value;
  data[entry.day].entries.push(entry);
  renderAllTable();
}

function openModal(event) {
  $modal.className = 'modal';
}
function closeModal(event) {
  $modal.className = 'modal hidden';
}

function switchDays(day) {
  var label = 'Scheduled Events For ';
  $scheduledEvents.textContent = label + day[0].toUpperCase() + day.substring(1);
  for (var i = 0; i < $schedule.length; i++) {
    if (day !== $schedule[i].getAttribute('data-view')) {
      $schedule[i].className = 'schedule hidden';
    } else {
      $schedule[i].className = 'schedule';
    }
  }
}

function renderEntry(entry) {
  var row = document.createElement('tr');
  var time = document.createElement('td');
  time.textContent = entry.time;
  row.appendChild(time);
  var description = document.createElement('td');
  description.textContent = entry.description;
  row.appendChild(description);
  return row;
}
function renderAllTable(event) {
  for (var i = 0; i < $schedule.length; i++) {
    $schedule[i].innerHTML = '';
    var $tHead = document.createElement('thead');
    var $tr = document.createElement('tr');
    var $thTime = document.createElement('th');
    $thTime.textContent = 'Time';
    var $thDescription = document.createElement('th');
    var $tBody = document.createElement('tbody');
    $thDescription.textContent = 'Description';
    $tHead.appendChild($tr);
    $tr.appendChild($thTime);
    $tr.appendChild($thDescription);
    $schedule[i].appendChild($tHead);
    $schedule[i].appendChild($tBody);
    var day = $schedule[i].getAttribute('data-view');
    for (var j = 0; j < data[day].entries.length; j++) {
      $tBody.appendChild(renderEntry(data[day].entries[j]));
    }
  }
}

$week.addEventListener('click', function (event) {
  if (!event.target.matches('.dayofweek')) {
    return;
  }
  switchDays(event.target.textContent.toLowerCase());
});
$modalSubmit.addEventListener('click', closeModal);
$addEntry.addEventListener('click', openModal);
$form.addEventListener('submit', handleSubmit);
window.addEventListener('DOMContentLoaded', renderAllTable);
