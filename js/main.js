/* global data */
/* exported data */

const $form = document.querySelector('form');
const $image = document.querySelector('.image');

// const previousEntryJson = localStorage.getItem("entry-local-storage");
// if (previousEntryJson !== null) {
//   data = JSON.parse(previousEntryJson);
// }

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
  const entryObj = {
    title: $form.title.value,
    photo: $form.photo.value,
    notes: $form.notes.value,
    nextEntryId: 0
  };

  data.entries = { ...entryObj };

  data.entries.nextEntryId++;
  $image.setAttribute('src', 'images/placeholder-image-square.jpg');
  const entryJson = JSON.stringify(data);
  localStorage.setItem('entry-local-storage', entryJson);
  $form.reset();
};

$form.addEventListener('input', handleEntry);
$form.addEventListener('submit', handleSubmit);
