/*
Template Name: CYBER - Responsive Bootstrap 5 Admin Template
Version: 1.0.0
Author: Sean Ngu
Website: http://www.seantheme.com/cyber/
*/

var handleCheckbox = function() {
	document.querySelectorAll('[data-toggle="check-all"]').forEach(function (checkbox) {
		checkbox.addEventListener('change', function () {
			var isChecked = this.checked;
			var table = this.closest('#table');
			var checkboxes = table.querySelectorAll('tbody input[type="checkbox"]');

			checkboxes.forEach(function (checkbox) {
				checkbox.checked = isChecked;
			});
		});
	});
};

/* Controller
------------------------------------------------ */
$(document).ready(function() {
  handleCheckbox();
});