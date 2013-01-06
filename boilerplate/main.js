$('#debug').click(function(){
    $('body').append("Reloading...");
    window.location.reload();
});
// This set's up the module paths for underscore and backbone
require.config({ 
    'paths': { 
		"underscore": "libs/underscore-min", 
		"backbone": "libs/backbone-min",
        "backboneqp": "libs/backbone.queryparams",
        "backbonels": "libs/backbone-localstorage"
	},
	'shim': 
	{
        underscore: {
			'exports': '_'
		},
		backbone: {
			'deps': ['jquery', 'underscore'],
			'exports': 'Backbone'
		}
	}	
});

require([
    'underscore',
    'backbone',
    'app'
], 
function(_, Backbone, app){
	app.init();
});