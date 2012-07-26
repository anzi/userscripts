// ==UserScript==
// @name           Soundcloud Disable Comments
// @namespace      http://userscripts.org/users/tim
// @match          http*://soundcloud.com/*
// @copyright      2012 Tim Smart
// @license        MIT. Full license in source code.
// ==/UserScript==

// The MIT License
//
// Copyright (c) 2012 Tim Smart
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files
// (the "Software"), to deal in the Software without restriction,
// including without limitation the rights to use, copy, modify, merge,
// publish, distribute, sublicense, and/or sell copies of the Software, and
// to permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
// IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
// CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
// TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
// SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

;(function () {

// For multiple environments.
var unsafe = unsafeWindow || window

/**
 * Click a element with a script generated click event.
 *
 * @param {DomElement} element
 */
function clickElement (element) {
	var click = document.createEvent('MouseEvents')
	click.initMouseEvent(
		'click', true, true
	,	document.defaultView
	,	1, 0, 0, 0, 0
	,	false, false, false, false
	,	0, null
	)
	element.dispatchEvent(click)

	return click
}

// ====
// Find all the toggles and pseudo click them
var toggles = null // Object (xpath snapshot)

toggles = document.evaluate(
	'.//a[@class="comments-toggle"]'
,	document
,	null
,	XPathResult.ORDERED_NODE_SNAPSHOT_TYPE
,	null
)

var toggle = null // DomElement

for (var i = 0, il = toggles.snapshotLength; i < il; i++) {
	toggle = toggles.snapshotItem(i)
	clickElement(toggle)
}

})();

/* vim: set noexpandtab sts=0 ts=8 sw=8 tw=80 :*/
