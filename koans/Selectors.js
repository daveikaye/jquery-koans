describe('Selectors', function() {
	beforeEach(function() {
		$('#fixture').remove();
		$('body').append('<div id="fixture"></div>');
		$('#fixture').html('<div class="div_class" id="div-1" /><div id="div-2" /><div class="div_class" id="div-3" />');
		
		this.addMatchers({
		    toEqual: function(expected, customMessage) {
		    	this.message = function () {
		            return "Expected " + customMessage + " to be " + expected;
		        }
		    	
		    	return this.actual == expected;
		    }
		});
	});
	
	it('selects all DIVs', function() {
		expect($('#fixture div').length).toEqual(__, 'number of elements selected');
	});
	
	it('selects element by id', function() {
		expect($(__).attr('id')).toEqual('div-2', 'selected id');
	});

	it('selects element by class', function() {
		expect($('__').attr('class')).toEqual('div_class', 'selected class');
	});

	it('selects iterates through matched elements', function() {
		var matchedElements = [];
		$('.div_class').each(function() {
			matchedElements.push({'id':$(this).attr('id')});
		});
		
		expect(matchedElements.length).toEqual(__, 'number of elements iterated');
		expect(matchedElements[1].id).toEqual(__, '2nd element\'s id');
	});
	
});