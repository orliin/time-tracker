// ==UserScript==
// @name         New time helper
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Additional features for the time events app
// @author       SIT dev community
// @match        https://hrportalsgesprod-sapdelim-heuclnt810cfrt.launchpad.cfapps.eu20.hana.ondemand.com/sap/bc/ui2/flp/ui5appruntime.html?sap-ui-app-id=customer.TimeCorrection2Extension*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ondemand.com
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    const loadScriptInterval = setInterval(() => {
        if (sap.ui.getCore().byId('__xmlview0--idEventsTable')) {
            window.MY_WORK_HOURS = 8; // edit this to your personal daily work hours
            const today = new Date().toISOString().split('T')[0];
            const $Script = document.createElement('script');
            $Script.setAttribute(
                'src',
                'https://raw.githubusercontent.com/orliin/time-tracker/refs/heads/main/time-events-ext.js?' + today
            );
            document.head.appendChild($Script);
            clearInterval(loadScriptInterval);
        } else {
            console.log('The timeEventsTable could not be found.');
        }
    }, 1000);
})();