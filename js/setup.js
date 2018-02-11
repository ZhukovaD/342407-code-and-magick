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

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);


  wizardElement.querySelector('.setup-similar-label').textContent = WIZARD_NAMES[getRandomNumber(0, WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomNumber(0, WIZARD_SURNAMES.length)];
  wizardElement.querySelector('.wizard-coat').style.fill = WIZARD_COAT_COLORS[getRandomNumber(0, WIZARD_COAT_COLORS.length)];
  wizardElement.querySelector('.wizard-eyes').style.fill = WIZARD_EYES_COLORS[getRandomNumber(0, WIZARD_EYES_COLORS.length)];

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

var colorize = function (array, element) {
  var randomColor = array[getRandomNumber(0, array.length)];

  if (element.hasAttribute('style')) {
    element.setAttribute('style', 'fill:' + randomColor);
  }

  if (element.tagName.toLowerCase() === 'div') {
    element.style.background = randomColor;
  } else {
    element.style.fill = randomColor;
  }
  return randomColor;
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
  document.getElementsByName('coat-color')[0].value = colorize(WIZARD_COAT_COLORS, setupWizardCoat);
});

setupWizardEyes.addEventListener('click', function () {
  document.getElementsByName('eyes-color')[0].value = colorize(WIZARD_EYES_COLORS, setupWizardEyes);
});

setupWizardFireball.addEventListener('click', function () {
  document.getElementsByName('fireball-color')[0].value = colorize(WIZARD_FIREBALL_COLORS, setupWizardFireball);
});

