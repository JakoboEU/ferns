$(document).ready(function() {
	function closeFernModal() {
		$('#fernModal').hide();
		$('.page_wrapper').removeClass('dialog_open');
	}

	$.ajaxSetup({
		beforeSend: function(xhr) {
	  		if (xhr.overrideMimeType) {
	    		xhr.overrideMimeType("application/json");
	 		}
	 	}
		});

	$('.fern').click(function(event) {
		var id = $(this).data('id');
		var template = $('#fernModalTemplate').html();

		$.get(id + '/fern.json', function(response) {
			var rendered = Mustache.render(template, response);
    		$('#fernModal').html(rendered);
    		$('#fernModal').show();
    		$('.page_wrapper').addClass('dialog_open');

			$('#fernModal .close').click(function() {
				closeFernModal();
			});

			$('.page_wrapper').click(function() {
				closeFernModal();
			});
		});
	});
});
