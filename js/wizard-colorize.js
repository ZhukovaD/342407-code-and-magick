'use strict';

(function () {
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var setupWizardCoat = document.querySelector('.wizard-coat');
  var setupWizardEyes = document.querySelector('.wizard-eyes');
  var setupWizardFireball = document.querySelector('.setup-fireball-wrap');


  setupWizardCoat.addEventListener('click', function () {
    document.getElementsByName('coat-color')[0].value = window.util.colorize(WIZARD_COAT_COLORS, setupWizardCoat);
  });

  setupWizardEyes.addEventListener('click', function () {
    document.getElementsByName('eyes-color')[0].value = window.util.colorize(WIZARD_EYES_COLORS, setupWizardEyes);
  });

  setupWizardFireball.addEventListener('click', function () {
    document.getElementsByName('fireball-color')[0].value = window.util.colorize(WIZARD_FIREBALL_COLORS, setupWizardFireball);
  });

})();
