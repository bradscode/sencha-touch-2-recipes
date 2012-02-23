Ext.define('recipe.controller.SampleController', {
  extend: 'Ext.app.Controller',
  config: {
    refs: {
      stylePicker: 'panel[id=stylePicker]',
      stylePickerList: 'panel[id=stylePicker] list'
    },
    control: {
      'button[action=showStyles]': {
        tap: 'onTapListButton'
      },
      stylePickerList: {
        select: 'changeTheme'
      }
    }
  },
  onTapListButton: function (button) {
    this.getStylePicker().showBy(button)
  },
  changeTheme: function (dataview, record) {
    [document.getElementById('default'), document.getElementById('gpp')]
      .forEach(function (v) {
        v.disabled = (v.id != record.data.id);
      });
    this.getStylePicker().hide();
  }
});

Ext.application({
  name: 'recipe',
  viewport: {
    autoMaximize: true
  },
  controllers: [
    'SampleController'
  ],
  launch: function () {
    Ext.Viewport.add({
      xtype: 'panel',
      layout: 'vbox',
      items: [
        {
          xtype: 'toolbar',
          docked: 'top',
          items: [
            {
              iconCls: 'list',
              iconMask: true,
              ui: 'plain',
              action: 'showStyles'
            },
            {
              xtype: 'spacer'
            },
            {
              xtype: 'title',
              title: 'Social App'
            },
            {
              xtype: 'spacer'
            }
          ]
        },
        {
          xtype: 'panel',
          layout: 'hbox',
          flex: 1,
          defaults: {
            xtype: 'button',
            style: 'margin: 0.3em;',
            ui: 'app'
          },
          items: [
            {
              text: 'Friends',
              flex: 2
            },
            {
              text: 'Everyone',
              flex: 2
            }
          ]
        },
        {
          xtype: 'list',
          flex: 9,
          store: {
            data: [
              { name: 'Ham', message: 'hello!', 
                image: 'images/men1.png'},
              { name: 'Egg', message: 'How are you?', 
                image: 'images/men2.png'},
              { name: 'Ham', message: 'Pretty good, and you?', 
                image: 'images/men1.png'},
              { name: 'Egg', message: 'Pretty good, and you?', 
                image: 'images/men2.png'},
              { name: 'Ham', message: 'Pretty good, and you?', 
                image: 'images/men1.png'}
            ]
          },
          itemTpl: [
            '<div class="timeline-wrapper">',
            '   <img src="{image}" width="48px" height="48px" />',
            '   <div class="timeline">',
            '       <h2>{name}</h2>',
            '       <p>{message}</p>',
            '   </div>',
            '</div>'
          ].join('')
        },
        {
          xtype: 'panel',
          id: 'stylePicker',
          modal: true,
          hidden: true,
          hideOnMaskTap: true,
          left: 0,
          top: 0,
          width: 220,
          height: 356,
          layout: 'fit',
          items: [{
            xtype: 'list',
            store: {
              data: [
                { id: 'default', caption: 'default' },
                { id: 'gpp', caption: 'G++' }
              ]
            },
            itemTpl: '{caption}'
          }]
        }
      ]
    });
  }
});
