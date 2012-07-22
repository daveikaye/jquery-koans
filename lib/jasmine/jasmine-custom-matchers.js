jQueryKataMatchers = {
	toEqual: function(expected, customMessage) {
    	this.message = function () {
            return "Expected " + customMessage + " to be " + expected;
        }
    	
    	return this.actual == expected;
    },

	toHaveClass: function(expected) {
		return this.actual.hasClass(expected);
	}
};