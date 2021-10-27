/* global data */
/* exported data */

const $form = document.querySelector('form');
const $image = document.querySelector('.image');
const $ulContainer = document.querySelector('.ulContainer');

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
  const ulCont = document.createElement('ul');
  const firstLi = document.createElement('li');
  const secondLi = document.createElement('li');
  // entries div and p
  const entriesDiv = document.createElement('div');
  const entriesP = document.createElement('p');
  // save div and button
  const saveDiv = document.createElement('div');
  const saveBtn = document.createElement('button');
  // last li with image and h2 and p
  const lastLi = document.createElement('li');
  const imgDiv = document.createElement('div');
  const img = document.createElement('img');

  const hAndPDiv = document.createElement('div');
  const hElement = document.createElement('h2');
  const pElement = document.createElement('p');

  ulCont.setAttribute('class', 'container');
  firstLi.setAttribute('class', 'row formJournal journal');
  secondLi.setAttribute('class', 'row journal');
  entriesDiv.setAttribute('class', 'halfColumn');
  saveDiv.setAttribute('class', 'halfColumn');
  saveBtn.setAttribute('type', 'submit');
  saveBtn.setAttribute('class', 'newBtn');
  lastLi.setAttribute('class', 'row');
  imgDiv.setAttribute('class', 'halfColumn fullColumn');
  img.setAttribute('class', 'image halfColumn fullColumn');
  img.setAttribute('src', `${entry.photo}`);
  hAndPDiv.setAttribute('class', 'halfColumn fullColumn');

  firstLi.textContent = 'Code Journal';
  entriesP.textContent = 'Entries';
  saveBtn.textContent = 'NEW';
  hElement.textContent = entry.title;
  pElement.textContent = entry.notes;

  ulCont.appendChild(firstLi);
  ulCont.appendChild(secondLi);
  secondLi.appendChild(entriesDiv);
  entriesDiv.appendChild(entriesP);
  secondLi.appendChild(saveDiv);
  saveDiv.appendChild(saveBtn);
  ulCont.appendChild(lastLi);
  lastLi.appendChild(imgDiv);
  imgDiv.appendChild(img);
  lastLi.appendChild(hAndPDiv);
  hAndPDiv.appendChild(hElement);
  hAndPDiv.appendChild(pElement);

  return ulCont;
};

const handleCreation = () => {
  for (let i = 0; i < data.entries.length; i++) {
    $ulContainer.appendChild(createEntry(data.entries[i]));
  }
};

$form.addEventListener('input', handleEntry);
$form.addEventListener('submit', handleSubmit);
window.addEventListener('DOMContentLoaded', handleCreation);

/* <ul class="container">
    <li class="row formJournal journal">Code Journal</li>
    <li class="row journal">
      <div class="halfColumn"><p>Entries</p></div>
      <div class="halfColumn"><button type="submit" class="newBtn">NEW</button></div>
    </li>
    <li class="row">
      <div class="halfColumn fullColumn">
        <img src="https://upload.wikimedia.org/wikipedia/en/5/52/Misery_%281990_film_poster%29.png" alt="Misery movie cover" class="image halfColumn fullColumn">
      </div>
      <div class="halfColumn fullColumn">
        <h2>Misery</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis consequuntur facilis placeat mollitia perspiciatis velit! Id excepturi amet ab odit quod, quidem, quaerat vero voluptate alias quis dolorem fugit cupiditate.</p>
      </div>
    </li>
</ul> */
