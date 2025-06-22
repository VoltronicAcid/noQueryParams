// ==UserScript==
// @name         SexyPorn - No Query Params
// @author       VoltronicAcid
// @description  Remove query parameters from the URL of a video's page on SexyPorn
// @version      1.0
// @homepageURL  https://github.com/VoltronicAcid/noQueryParams
// @supportURL   https://github.com/VoltronicAcid/noQueryParams/issues
// @downloadURL  https://github.com/VoltronicAcid/noQueryParams/raw/master/noQueryParams.user.js
// @match        https://sxyprn.com/post/*.html\?*
// ==/UserScript==

if (document.location.search.length) {
    const [uri] = document.location.href.split('?');
    document.location.replace(uri);
}
