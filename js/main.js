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

$form.addEventListener('input', handleEntry);
