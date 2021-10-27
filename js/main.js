/* global data */
/* exported data */

const $form = document.querySelector('form');
const $image = document.querySelector('.image');
const $ulContainer = document.querySelector('#ulContainer');

const handleEntry = event => {
  event.preventDefault();
  const target = event.target;
  const value = target.value;
  const type = target.type;

  if (type === 'url') {
    $image.setAttribute('src', value);
  }
};

const handleSubmit = event => {
  event.preventDefault();
  var entryObj = {
    title: $form.title.value,
    photo: $form.photo.value,
    notes: $form.notes.value,
    nextEntryId: data.nextEntryId++
  };

  data.entries.unshift(entryObj);

  $image.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
};

const createEntry = entry => {
  const lastLi = document.createElement('li');
  const imgDiv = document.createElement('div');
  const img = document.createElement('img');

  const hAndPDiv = document.createElement('div');
  const hElement = document.createElement('h2');
  const pElement = document.createElement('p');

  lastLi.setAttribute('class', 'row');
  imgDiv.setAttribute('class', 'halfColumn fullColumn');
  img.setAttribute('class', 'image halfColumn fullColumn');
  img.setAttribute('src', `${entry.photo}`);
  hAndPDiv.setAttribute('class', 'halfColumn fullColumn');

  hElement.textContent = entry.title;
  pElement.textContent = entry.notes;

  lastLi.appendChild(imgDiv);
  imgDiv.appendChild(img);
  lastLi.appendChild(hAndPDiv);
  hAndPDiv.appendChild(hElement);
  hAndPDiv.appendChild(pElement);

  return lastLi;
};

const handleCreation = () => {
  for (let i = 0; i < data.entries.length; i++) {
    $ulContainer.appendChild(createEntry(data.entries[i]));
  }
};

$form.addEventListener('input', handleEntry);
$form.addEventListener('submit', handleSubmit);
window.addEventListener('DOMContentLoaded', handleCreation);
