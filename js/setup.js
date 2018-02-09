'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupSimilarList = document.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getRandomNumber = function (arrayName) {
  return Math.floor(Math.random() * arrayName.length);
};

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);


  wizardElement.querySelector('.setup-similar-label').textContent = WIZARD_NAMES[getRandomNumber(WIZARD_NAMES)] + ' ' + WIZARD_SURNAMES[getRandomNumber(WIZARD_SURNAMES)];
  wizardElement.querySelector('.wizard-coat').style.fill = WIZARD_COAT_COLORS[getRandomNumber(WIZARD_COAT_COLORS)];
  wizardElement.querySelector('.wizard-eyes').style.fill = WIZARD_EYES_COLORS[getRandomNumber(WIZARD_EYES_COLORS)];

  fragment.appendChild(wizardElement);
}
setupSimilarList.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');


var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = document.querySelector('.setup-close');
var setupWizardCoat = document.querySelector('.wizard-coat');
var setupWizardEyes = document.querySelector('.wizard-eyes');
var setupWizardFireball = document.querySelector('.setup-fireball-wrap');

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);

};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};


setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});


setupWizardCoat.addEventListener('click', function () {
  var randomCoatColor = WIZARD_COAT_COLORS[getRandomNumber(WIZARD_COAT_COLORS)];
  setupWizardCoat.setAttribute('style', 'fill:' + randomCoatColor);
  document.getElementsByName('eyes-color')[0].value = randomCoatColor;
});

setupWizardEyes.addEventListener('click', function () {
  var randomEyesColor = WIZARD_EYES_COLORS[getRandomNumber(WIZARD_EYES_COLORS)];
  setupWizardEyes.style.fill = randomEyesColor;
  document.getElementsByName('eyes-color')[0].value = randomEyesColor;
});

setupWizardFireball.addEventListener('click', function () {
  var randomFireballColor = WIZARD_FIREBALL_COLORS[getRandomNumber(WIZARD_FIREBALL_COLORS)];
  setupWizardFireball.style.background = randomFireballColor;
  document.getElementsByName('fireball-color')[0].value = randomFireballColor;
});
