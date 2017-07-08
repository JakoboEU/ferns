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

	function showFernModal(fernId) {
		var template = $('#fernModalTemplate').html();

		$.get(fernId + '/fern.json', function(response) {
			var rendered = Mustache.render(template, response);
    		$('#fernModal').html(rendered);
    		openModal('#fernModal');
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
		showFernModal(id);
	});

	$('.contact').click(function() {
		setTimeout(function() {
			openModal('#contactModal');
		});
	});

	// is href to open modal

	var hash = $(location).attr('hash');
	if (hash) {
		showFernModal(hash.substring(1, hash.length));
	}
});
