// ==UserScript==
// @name         SexyPorn - No Query Params
// @author       VoltronicAcid
// @description  Remove query parameters from the URL of a video's page on SexyPorn
// @version      1.1
// @homepageURL  https://github.com/VoltronicAcid/noQueryParams
// @supportURL   https://github.com/VoltronicAcid/noQueryParams/issues
// @downloadURL  https://github.com/VoltronicAcid/noQueryParams/raw/master/noQueryParams.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sxyprn.com
// @match        https://sxyprn.com/post/*.html\?*
// ==/UserScript==

if (document.location.search.length) {
    const [uri] = document.location.href.split('?');
    document.location.replace(uri);
}
