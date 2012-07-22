describe('Selectors', function() {
	beforeEach(function() {
		$('#fixture').remove();
		$('body').append('<div id="fixture"></div>');
		$('#fixture').html(
				'<div class="div_class" id="div-1" />'+
				'<div id="div-2">'+
				'	<div id="div-2-child">'+
				'		<div id="div-2-grandchild">Hello world</div>'+
				'   </div>'+
				'</div>'+
				'<div class="div_class" id="div-3" />');
		
		this.addMatchers(jQueryKataMatchers);
	});
	
	it('adds html inside element', function() {
		expect($('#div-1').html()).toEqual('<p>O hai!</p>');
	});

	it('adds text inside element', function() {
		expect($('#div-1').text()).toEqual('O hai!');
	});

	it('appends inside element', function() {
		$('#div-2-grandchild').append(__);
		expect($('#div-2-grandchild').html()).toEqual('Hello world<p>Good night nurse.</p>');
	});

	it('inserts after element', function() {
		$('#div-2').after(__);
		expect($('#div-2_5').length).not.toEqual(0);
	});
	
});