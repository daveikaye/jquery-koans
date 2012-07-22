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
	
	it('selects element by id', function() {
		expect($(__).attr('id')).toEqual('div-2', 'selected id');
	});

	it('selects elements by class', function() {
		expect($(__).attr('class')).toEqual('div_class', 'selected class');
	});
	
	it('selects child element DIV', function() {
		expect($(__).attr('id')).toEqual('div-2-child', 'child element');
	});

	it('selects descendent element DIV', function() {
		expect($('#div-2 #div-2-grandchild').attr('id')).toEqual(__, 'descendent element');
	});
	
	it('selects all DIVs', function() {
		expect($('#fixture div').length).toEqual(__, 'number of elements selected');
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