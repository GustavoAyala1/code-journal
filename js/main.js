/* global data */
/* exported data */

const $form = document.querySelector('form');
const $image = document.querySelector('.image');
const $ulContainer = document.querySelector('#ulContainer');
const $newBtn = document.querySelectorAll('.newBtn');
const $hiddenDiv = document.querySelector('.hiddenDiv');
const $noEntries = document.querySelector('.noEntries');
const $hiddenEntries = document.querySelector('.hiddenEntry');
const $hiddenNewEntries = document.querySelector('.hiddenNewEntry');
const $entriesCont = document.querySelector('.entriesCont');
const $deleteEntry = document.querySelector('.deleteEntry');

const removeHidden = () => {
  $hiddenDiv.classList.remove('hidden');
  $noEntries.classList.add('hidden');
  $hiddenEntries.classList.add('hidden');
  $hiddenNewEntries.classList.remove('hidden');
  $entriesCont.classList.add('hidden');
};

$newBtn.forEach(button => button.addEventListener('click', removeHidden));

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
    notes: $form.notes.value
  };

  data.view = 'entries';

  if (data.editing) {
    entryObj.nextEntryId = data.editing.nextEntryId;
    data.entries[data.editing.index] = entryObj;
    data.editing = null;
  } else {
    entryObj.nextEntryId = data.nextEntryId++;
    data.entries.unshift(entryObj);
  }

  $image.setAttribute('src', 'images/placeholder-image-square.jpg');
  $hiddenDiv.classList.add('hidden');
  $entriesCont.classList.remove('hidden');
  $deleteEntry.classList.add('hidden');
  $form.reset();
  removeAllChildNodes($ulContainer);
  handleCreation();
};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const createEntry = entry => {
  const lastLi = document.createElement('li');
  const imgDiv = document.createElement('div');
  const img = document.createElement('img');

  const hAndPDiv = document.createElement('div');
  const tAndEDiv = document.createElement('div');
  const hElement = document.createElement('h2');
  const anchorTag = document.createElement('a');
  const editBtn = document.createElement('button');
  const pElement = document.createElement('p');

  lastLi.setAttribute('class', 'row rowCont');
  imgDiv.setAttribute('class', 'halfColumn fullColumn');
  img.setAttribute('class', 'image halfColumn fullColumn');
  img.setAttribute('src', `${entry.photo}`);
  hAndPDiv.setAttribute('class', 'halfColumn fullColumn');
  tAndEDiv.setAttribute('class', 'row editDiv');
  anchorTag.setAttribute('href', '#entriesForm');
  editBtn.setAttribute('class', 'edit');
  editBtn.setAttribute('data-entry-id', entry.nextEntryId);

  hElement.textContent = entry.title;
  pElement.textContent = entry.notes;
  editBtn.innerHTML = '&#9998';

  lastLi.appendChild(imgDiv);
  imgDiv.appendChild(img);
  lastLi.appendChild(hAndPDiv);
  hAndPDiv.appendChild(tAndEDiv);
  tAndEDiv.appendChild(hElement);
  anchorTag.appendChild(editBtn);
  tAndEDiv.appendChild(anchorTag);
  hAndPDiv.appendChild(pElement);

  return lastLi;
};

const handleEdit = event => {
  const target = event.target;

  const entryId = target.getAttribute('data-entry-id');

  if (entryId) {
    $hiddenDiv.classList.remove('hidden');
    $hiddenEntries.classList.add('hidden');
    $hiddenNewEntries.classList.remove('hidden');
    $entriesCont.classList.add('hidden');
    $deleteEntry.classList.remove('hidden');

    for (let i = 0; i < data.entries.length; i++) {
      if (+entryId === data.entries[i].nextEntryId) {
        data.editing = data.entries[i];
        data.editing.index = i;
        $form.title.value = data.editing.title;
        $form.photo.value = data.editing.photo;
        $form.notes.value = data.editing.notes;
      }
    }
  }
};

const handleCreation = event => {
  if (data.view === 'entries') {
    $ulContainer.classList.remove('hidden');
    $hiddenDiv.classList.add('hidden');
    $noEntries.classList.add('hidden');
  }
  for (let i = 0; i < data.entries.length; i++) {
    $ulContainer.appendChild(createEntry(data.entries[i]));
  }
};

$form.addEventListener('input', handleEntry);
$form.addEventListener('submit', handleSubmit);
window.addEventListener('DOMContentLoaded', handleCreation);
$ulContainer.addEventListener('click', handleEdit);
