
// TextTool

var TextTools = function () {
	return {
		wordCount : function(text) {
			return text.replace(/^\W+/).replace(/\W+$/).split(/[\W ]+/).length
		}
	
	}
}();
