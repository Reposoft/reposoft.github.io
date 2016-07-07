
$(document).ready(function() {
	
	var blogref = $('#blogref');
	if (blogref.length > 0) {
		$.ajax({
			url: 'blog/0_snippet.html',
			dataType: 'html',
			success: function(html) {
				var extract = $('body > *', html);
				console.log('got', extract);
				blogref.append(extract);
			}
		});
	}
	
});
