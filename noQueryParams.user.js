// ==UserScript==
// @name         No Query Params
// @namespace    https://github.com/VoltronicAcid/
// @downloadURL  https://github.com/VoltronicAcid/noQueryParams/raw/master/noQueryParams.user.js
// @version      0.1
// @description  Remove query parameters from the URL of a video's page on SexyPorn
// @author       VoltronicAcid
// @match        https://sxyprn.com/post/*.html\?*
// ==/UserScript==

if (document.location.search.length) {
    const [uri] = document.location.href.split('?');
    document.location.replace(uri);
}
