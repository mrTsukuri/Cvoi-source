"use strict";

require('zangdar');

window.wizard = new Zangdar('#zangdar-form', {
  onStepChange: function onStepChange(step) {
    var breadcrumb = this.getBreadcrumb();
    buildSteps(breadcrumb);
  },
  onValidation: function onValidation(step, fields, form) {
    if (step.labeled('2')) {
      var err_message = form.querySelector('.error__message');

      if (err_message) {
        err_message.parentNode.removeChild(err_message);
      }

      return true;
    }

    return true;
  },
  onSubmit: function onSubmit(e) {
    e.preventDefault();
    this.getCurrentStep().active = false;
    this.getCurrentStep().completed = true;
    console.log;
    var breadcrumb = this.getBreadcrumb();
    buildSteps(breadcrumb);
    e.target.style.display = 'none';
    document.getElementById('form-completed').style.display = 'block';
    return false;
  }
});

window.buildSteps = function (steps) {
  var $steps = document.getElementById('steps');

  var _loop = function _loop(label) {
    //console.log(steps[label].index);          
    if (steps.hasOwnProperty(label)) {
      var $li = document.querySelector('.choosing-tabs-btn');
      $li.querySelector('.num').innerHTML = steps[label].index + 1;
      $li.classList.add('step-item');

      if (steps[label].active) {
        document.querySelectorAll('.choosing-tabs-btn').forEach(function (item) {
          item.classList.remove('active');
        });
        $li.classList.add('active');
      }

      $li.addEventListener('click', function (e) {
        e.preventDefault();
        wizard.revealStep(label);
      });
      $steps.appendChild($li);
    }
  };

  for (var label in steps) {
    _loop(label);
  }
};

var breadcrumb = wizard.getBreadcrumb();
buildSteps(breadcrumb);
document.querySelectorAll('.next-step').forEach(function (item) {
  item.addEventListener('click', function () {
    document.querySelector('.choosing-tabs-content').scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  });
});
document.querySelectorAll('.prev-step').forEach(function (item) {
  item.addEventListener('click', function () {
    document.querySelector('.choosing-tabs-content').scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  });
});