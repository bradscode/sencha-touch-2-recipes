Recipes:1 To emulate the browser back button. 
          http://recipe1.senchafy.com/#page/spring

http://dev.ariel-networks.com/wp/archives/1343

Sorry, anyway, translated by google translate...
---
# Problem:
- You want to enable your browser's "Back" button transition to the screen in the application
- When you reload the page, you want to keep the display state

# Solution:
Function makes use of the route that provides the framework:

<pre><code>
Ext.define('recipe.controller.SampleController', {
  extend: 'Ext.app.Controller',
  config: {
    refs: {
      tabPanel : 'tabpanel'
    },
    control: {
      tabPanel: {
        activeitemchange: 'onActiveItemChange'
      }
    },
    routes: {
      // Regular expression "page/([% a-zA-Z0-9-\_\s,]+)" will be generated.
      'page/:season': 'onRoute',     
    }
  },

  onRoute: function (season) {
    var tabPanel = this.getTabPanel(),
        target = tabPanel.down('container[title=' + season + ']');
    tabPanel.setActiveItem(target);
  },

  onActiveItemChange: function (self, newItem) {
    window.location.hash = 'page/' + newItem.config.title;
  }
});
</pre></code>

# Discussion:
Sencha Touch screen transition is, because it does not move to another document, URL will not be changed. Therefore, you no longer can use the browser's "Back" as a button when viewing the WEB page. When the same reason, you reload the browser, the screen will revert to the initial state also. Therefore, we need to raise some support in the implementation side will come out.

Root function is the ability to map the (method) and the controller action hash fragment of the URL. Hash fragment, it is part of the # hogehoge of www.example.com / index.html # hogehoge. If this value is changed, the browser will fire hashchange event. In Sencha Touch, and then execute the action of the controller to capture this event to match the hash fragment.

In the example above, page / have been in the controller class: From the definition of season, to generate a regular expression that page / ([% a-zA-Z0-9-\ _ \ s,] +), the hash fragment If you want to match this regular expression, then run the onRoute action. For example, is a hash of the target fragment, such as # page / hogehoge and # page/123 to match.

":" Has a special meaning, ":" token wearing will be the parameter values of the action. In the sample,: Te has been passed as a parameter for use in processing onRoute action, the target page to display the value at the position of the season.

By using the root function, is called Sandan, can emulate the display reload, the page (button "Forward" &) in the browser's "Back" button.

