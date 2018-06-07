'use strict'

window.onload = function () {
	var checked = document.querySelectorAll('input:checked');
	var labels = document.querySelectorAll('.controls__item');
	getLabel(checked[0]);

	function getLabel(item) {
		for (var j = 0; j < labels.length ; j++) {
			var labelFor = labels[j].htmlFor;
			if (labelFor == item.id) {
				labels[j].style.borderColor = '#16d428';
				labels[j].style.opacity = '1';
			}
		}
	} 

	document.querySelector('.slider').addEventListener('click', colorLabel);

	function colorLabel(event){
		console.log(event);
		var eventTgt = event.target;
		console.log(eventTgt);
		if (eventTgt.className == 'd-none'){
			for (var j = 0; j < labels.length ; j++) {
				console.log(labels[j]);
				labels[j].style.opacity = '0.5';
				labels[j].style.borderColor = 'white';
			}
			eventTgt.checked;
			getLabel(eventTgt);
						
		} 
	};

}