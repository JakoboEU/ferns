$(document).ready(function() {
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

			$('#fernModal .close').click(function(event) {
				$('#fernModal').hide();
			});
		});
	});
});
