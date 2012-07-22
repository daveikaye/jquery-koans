describe('ShowHideAndAmimate', function() {
	beforeEach(function() {
		$('#fixture').remove();
		$('body').append('<div id="fixture"></div>');
		$('#fixture').html(
				'<div class="div_class" id="div-1" />'+
				'<div id="div-2">'+
				'	<div id="div-2-child">'+
				'		<div id="div-2-grandchild" style="width:200px; height:50px; background-color:yellow;">'+
				'			<a id="link1 href="javascript:void(0)">Hello world</a>'+
				'			<a id="link2" href="javascript:void(0)" style="display:none">Hello world</a>'+
				'		</div>'+
				'   </div>'+
				'</div>'+
				'<div class="div_class" id="div-3"></div>');
	});
	
	it('shows link', function() {
		$(__).show();
		
		expect($('#link2').is(':visible')).toBeTruthy();
	});

	it('hides link', function() {
		__
		
		expect($('#link1').is(':visible')).toBeFalsy();
	});
	
	it('toggles link', function() {
		expect($('#link1').is(':visible')).toBeTruthy();

		$(__).toggle();
		
		expect($('#link1').is(':visible')).toBeFalsy();
	});

	it('fades out link', function() {
		$(__).fadeOut(__);
		
		waits(1010);
		runs(function() {
				expect($('#link1').is(':visible')).toBeFalsy();
			});
	});
	
	it('animates link', function() {
		$('#link1').animate({'opacity':'0'}, 1000);
		
		waits(1010)
		runs(function() {
			expect($('#link1').css(__)).toEqual('0')
		})
	});

	it('slides down', function() {
		var done = false;
		
		$('#div-2-grandchild').hide().slideDown(2000, function() {
			done = true;
		});
		
		waitsFor(function() {return done});
		runs(function() {
			expect(done).toEqual(true);
		});
	});
	
});