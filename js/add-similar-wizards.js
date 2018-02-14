'use strict';

(function () {
  var setup = document.querySelector('.setup');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var setupSimilarList = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();

  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];


  for (var i = 0; i < 4; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = WIZARD_NAMES[window.util.getRandomNumber(0, WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[window.util.getRandomNumber(0, WIZARD_SURNAMES.length)];
    wizardElement.querySelector('.wizard-coat').style.fill = WIZARD_COAT_COLORS[window.util.getRandomNumber(0, WIZARD_COAT_COLORS.length)];
    wizardElement.querySelector('.wizard-eyes').style.fill = WIZARD_EYES_COLORS[window.util.getRandomNumber(0, WIZARD_EYES_COLORS.length)];

    fragment.appendChild(wizardElement);
  }
  setupSimilarList.appendChild(fragment);

  setup.querySelector('.setup-similar').classList.remove('hidden');
})();

