Ext.application({
  name: 'recipe',
  launch: function () {
    Ext.Viewport.add({
      xtype: 'panel',
      items: [
        {
          xtype: 'toolbar',
          docked: 'top',
          items: [
            {
              iconCls: 'list',
              iconMask: true,
              ui: 'plain',
              action: 'change'
            },
            {
              xtype: 'spacer'
            },
            {
              xtype: 'title',
              title: 'Social Social'
            },
            {
              xtype: 'spacer'
            }
          ]
        },
        {
          xtype: 'panel',
          layout: 'hbox',
          defaults: {
            xtype: 'button'
          },
          items: [
            {
              xtype: 'spacer',
              flex: 1
            },
            {
              text: 'Friends',
              flex: 3
            },
            {
              text: 'Everyone',
              flex: 3
            },
            {
              xtype: 'spacer',
              flex: 1
            }
          ]
        },
        {
          xtype: 'list',
          store: {
            fields: [
              'name', 'image', 'message'
            ]
          },
          itemTpl: [
            '<div class="timeline-wrapper">',
            '   <img src="{image}" />',
            '   <div class="timeline">',
            '       <h2>{name}</h2>',
            '       <p>{message}</p>',
            '   </div>',
            '</div>'
          ].join('')
        }
      ]
    });
  }
});
