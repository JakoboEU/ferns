$(document).ready(function() {
	var modalOpen;

	function closeModal() {
		if (modalOpen) {
			$(modalOpen).hide();
			$('.page_wrapper').removeClass('dialog_open');
		}

		modalOpen = null;
	}

	function openModal(modalId) {
		closeModal();
		modalOpen = modalId;
    	$(modalId).show();
    	$('.page_wrapper').addClass('dialog_open');

		$(modalId + ' .close').click(function() {
			closeModal();
		});


		$('.page_wrapper').click(function() {
			closeModal();
		});
	}

	$.ajaxSetup({
		beforeSend: function(xhr) {
	  		if (xhr.overrideMimeType) {
	    		xhr.overrideMimeType("application/json");
	 		}
	 	}
	});

	$('.fern').click(function() {
		var id = $(this).data('id');
		var template = $('#fernModalTemplate').html();

		$.get(id + '/fern.json', function(response) {
			var rendered = Mustache.render(template, response);
    		$('#fernModal').html(rendered);
    		openModal('#fernModal');
		});
	});

	$('.contact').click(function() {
		setTimeout(function() {
			openModal('#contactModal');
		});
	});
});
