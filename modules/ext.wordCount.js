(function ($, mw) {
    $(function () {
		document.getElementById('wpTextbox1').onkeyup = function () {
			var article = document.getElementById('wpTextbox1').value;
			var words = 0;
			var wasLetter = false;
			for (var i = 0; i < article.length; ++i) {
				var c = article[i];
				var isLetter = ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <='z'));
				if (isLetter && !wasLetter)
					++words;
				wasLetter = isLetter;
			}
			document.getElementById('mw-js-message').style.display = 'initial';
			document.getElementById('mw-js-message').innerHTML = 'Word count: ' + words;
		};
    });
}(jQuery, mediaWiki));
