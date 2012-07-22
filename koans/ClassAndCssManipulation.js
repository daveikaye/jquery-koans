describe('Selectors', function() {
	beforeEach(function() {
		$('#fixture').remove();
		$('body').append('<div id="fixture"></div>');
		$('#fixture').html(
				'<div class="div_class" id="div-1" />'+
				'<div id="div-2">'+
				'	<div id="div-2-child">'+
				'		<div id="div-2-grandchild" />'+
				'   </div>'+
				'</div>'+
				'<div class="div_class" id="div-3" />');
		
		this.addMatchers({
		    toEqual: function(expected, customMessage) {
		    	this.message = function () {
		            return "Expected " + customMessage + " to be " + expected;
		        }
		    	
		    	return this.actual == expected;
		    }
		});
	});
	
	it('adds class to DIV', function() {
		$('#div-1').addClass(__);
		expect($('#div-1')).toHaveClass('div-class-2');
	});

	it('removes class from DIV', function() {
		expect($('#div-1')).not.toHaveClass('div_class');
	});
	
});