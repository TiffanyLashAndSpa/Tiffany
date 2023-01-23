/**
 * @file index.js
 * @author Kyle Huang
 * 
 * Contains the menu toggle and updates year in footer.
 */

"use strict";
(function () {
	window.addEventListener("load", init);

	/**
	 * @brief main block
	 */
	function init() {
		const menuBtn = document.querySelector('#menuIcon');
		const menu = document.querySelector('.side');

		// toggle menu in mobile mode
		menuBtn.addEventListener('click', () => menu.classList.toggle('show'));

		// update year in footer
		updateFooter();
	}

	/**
	 * @brief update year in footer
	 */
	function updateFooter() {
		let yearElem = document.querySelector("#year");
		let year = new Date().getFullYear();
		yearElem.textContent = year;
	}
})();