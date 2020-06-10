(function ($, mw) {
    $(function () {
		document.getElementById('wpTextbox1').onkeyup = function () {
			var article = document.getElementById('wpTextbox1').value;
            var words = wordCount(stripMarkup(article));
			document.getElementById('mw-js-message').style.display = 'initial';
			document.getElementById('mw-js-message').innerHTML = 'Word count: ' + words;
		};
    });
}(jQuery, mediaWiki));

function stripMarkup(str) {
    str = str.replace(/\[\[[^|\]]*\|/gi, '');
    str = str.replace(/\[\[/gi, '');
    str = str.replace(/\]\]/gi, '');
    str = str.replace(/'''/gi, '');
    str = str.replace(/''/gi, '');
    return str;
}

function wordCount(str) {
    var words = 0;
    var wasLetter = false;
    for (var i = 0; i < str.length; ++i) {
        var c = str[i];
        var isLetter = ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <='z'));
        if (isLetter && !wasLetter)
            ++words;
        wasLetter = isLetter;
    }
    return words;
}
