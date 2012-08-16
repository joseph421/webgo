Ext.require([    
    'Ext.panel.*',
    'Ext.layout.container.Border'
]);

Ext.Loader.onReady(function() {
    Ext.define('Webgo',{
        extend: 'Ext.data.Model',
        fields: [
            // set up the fields mapping into the xml doc
            // The first needs mapping, the others are very basic
            
        ]
    });
    
    Ext.define('App.BookGrid', {
        extend: 'Ext.grid.Panel',
        // This will associate an string representation of a class
        // (called an xtype) with the Component Manager
        // It allows you to support lazy instantiation of your components
        alias: 'widget.bookgrid',

        // override
        initComponent : function() {
            // Pass in a column model definition
            // Note that the DetailPageURL was defined in the record definition but is not used
            // here. That is okay.
            this.columns = [
                {text: "Author", width: 120, dataIndex: 'Author', sortable: true},
                {text: "Title", flex: 1, dataIndex: 'Title', sortable: true},
                {text: "Manufacturer", width: 115, dataIndex: 'Manufacturer', sortable: true},
                {text: "Product Group", width: 100, dataIndex: 'ProductGroup', sortable: true}
            ];
            // Note the use of a storeId, this will register thisStore
            // with the StoreManager and allow us to retrieve it very easily.
            this.store = new App.BookStore({
                storeId: 'gridBookStore',
                url: 'sheldon.xml'
            });
            // finally call the superclasses implementation
            this.callParent();
        }
    });
    
    Ext.define('App.webgoDetail', {
        extend: 'Ext.Panel',
        alias: 'widget.webgoDetail',
        frame: true,
        title: 'Webgo Application',
        width: 800,
        height: 600,
        layout: 'border',
        // override initComponent
        initComponent: function() {
            this.items = [{
                xtype: 'bookgrid',
                itemId: 'gridPanel',
                region: 'north',
                height: 210,
                split: true
            },{
                xtype: 'bookdetail',
                itemId: 'detailPanel',
                region: 'center'
            }];
            // call the superclass's initComponent implementation
            this.callParent();
        },
        // override initEvents
        initEvents: function() {
            // call the superclass's initEvents implementation
            this.callParent();

            // now add application specific events
            // notice we use the selectionmodel's rowselect event rather
            // than a click event from the grid to provide key navigation
            // as well as mouse navigation
            var bookGridSm = this.getComponent('gridPanel').getSelectionModel();
            ('selectionchange', function(sm, rs) {
            if (rs.length) {
                var detailPanel = Ext.getCmp('detailPanel');
                bookTpl.overwrite(detailPanel.body, rs[0].data);
            }
        })
            bookGridSm.on('selectionchange', this.onRowSelect, this);
        },
        // add a method called onRowSelect
        // This matches the method signature as defined by the 'rowselect'
        // event defined in Ext.selection.RowModel
        onRowSelect: function(sm, rs) {
            // getComponent will retrieve itemId's or id's. Note that itemId's
            // are scoped locally to this instance of a component to avoid
            // conflicts with the ComponentManager
            if (rs.length) {
                var detailPanel = this.getComponent('detailPanel');
                detailPanel.updateDetail(rs[0].data);
            }

        }
    });
// do NOT wait until the DOM is ready to run this
}, false);

Ext.onReady(function() {
    // create an instance of the app
    var webgoApp = new App.webgoDetail({        
    });
    // We can retrieve a reference to the data store
    // via the StoreManager by its storeId
    Ext.data.StoreManager.get('gridBookStore').load();
});