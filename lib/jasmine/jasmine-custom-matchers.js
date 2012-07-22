jQueryKataMatchers = {
	toEqual: function(expected, customMessage) {
    	this.message = function () {
            return "Equality failed";
        }
    	
    	return this.actual == expected;
    },

	toHaveClass: function(expected, customMessage) {
		this.message = function () {
            return "Failed class expectation";
        }
		
		return this.actual.hasClass(expected);
	}
};