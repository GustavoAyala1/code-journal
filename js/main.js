/* global data */
/* exported data */

const $form = document.querySelector('form');
const $image = document.querySelector('.image');

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

const handleUnload = event => {
  const entryJson = JSON.stringify(data);
  localStorage.setItem('entry-local-storage', entryJson);
};

$form.addEventListener('input', handleEntry);
$form.addEventListener('submit', handleSubmit);
window.addEventListener('beforeunload', handleUnload);
