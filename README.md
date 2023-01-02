# tiddlywiki-plugin-alertsuppression
This plugin will suppress the alert banner when it repeats, as it does when you lose connection with the Node JS or Tiddly Web server, allowing you to continue working offline without interference. It still allows the alert to show initially to inform the user, but will disappear after it repeats. You can enable or disable alert suppression in the settings tab for the plugin.

## Installing
* Install by adding it to the plugins folder of your Node JS TiddlyWiki server. For details, see [tiddlywiki.com](https://tiddlywiki.com/static/Installing%2520custom%2520plugins%2520on%2520Node.js.html) OR
* Open the index.html file in the repo and drag and drop the plugin link to your running TiddlyWiki.  

## Using
After installing, you need to open the settings tab and check the box to enable suppression of alerts. Also, please note that if you click the close button on the alert, TiddlyWiki will create a new one, which is not seen as a "repeat" of the same alert by the plugin. If, on the other hand, you open a tiddler and start to edit, the sync adapter should kick in and cause a repeat alert, triggering the plugin to hide it from view.  
