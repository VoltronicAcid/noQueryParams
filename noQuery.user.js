// ==UserScript==
// @name         Vids Only
// @namespace    https://github.com/VoltronicAcid/
// @downloadURL  https://github.com/VoltronicAcid/noQuery/raw/main/noQuery.user.js
// @version      0.1
// @description  Remove query parameters from video page URLs
// @author       VoltronicAcid
// @match        https://sxyprn.com/post/*.html\?*
// ==/UserScript==

if (document.location.search.length) {
    document.location.search = '';
}
