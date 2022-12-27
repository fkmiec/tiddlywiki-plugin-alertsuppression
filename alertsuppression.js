/*\
title: $:/plugins/fkmiec/alertsuppression/alertsuppression.js
type: application/javascript
module-type: startup

Startup initialisation

\*/
(function(){

    /*jslint node: true, browser: true */
    /*global $tw: false */
    "use strict";
    
    // Export name
    exports.name = "alertsuppression";
    exports.platforms = ["browser"];
    exports.after = ["startup"];
    exports.synchronous = true;

    exports.startup = function() {
        console.log("INITIALIZING the alertsuppression module")
        var self = this;
        var ENABLED_TITLE = "$:/plugins/fkmiec/alertsuppression/config/enabled";
        var ALERT_TAG = "$:/tags/Alert";
        // Make a logger
        var logger = new $tw.utils.Logger("alert-suppression",{
                colour: "cyan"
            });
        // Track tiddler changes
        $tw.wiki.addEventListener("change",function(changes) {
            // Bail if browser storage is disabled
            if($tw.wiki.getTiddlerText(ENABLED_TITLE) === "no") {
                logger.log("Enabling repeat alerts");
                var currentAlert = document.querySelector(".tc-alert");
		if(currentAlert != null) currentAlert.style.display='block';
                return;
            }
            // If it's an alert and count > 0, stop displaying it
            $tw.utils.each(changes,function(change,title) {
                var tiddler = $tw.wiki.getTiddler(title);
                if(tiddler === undefined) return;
		logger.log("Disabling repeat alerts. Evaluating: ", title, " with count ", tiddler.fields.count);
                if(tiddler.fields.tags !== undefined && tiddler.fields.tags.includes(ALERT_TAG) && tiddler.fields.count > -1) {
                    logger.log("Disabling repeat alerts: ", title);
                    document.querySelector(".tc-alert").style.display='none';
                }
            });
        });
    }
})();
