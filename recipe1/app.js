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

Ext.application({
  name: 'recipe',
  controllers: [
    'SampleController'
  ],
  launch: function () {
    Ext.create('Ext.TabPanel', {
      fullscreen: true,
      items: [
        {
          title: 'spring',
          html: '<img src="images/spring.jpg" />'
        },
        {
          title: 'summer',
          html: '<img src="images/summer.jpg" />'
        },
        {
          title: 'fall',
          html: '<img src="images/fall.jpg" />'
        },
        {
          title: 'winter',
          html: '<img src="images/winter.jpg" />'
        }
      ]
    });
  }
});
