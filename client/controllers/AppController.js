// App Controller
AppController = RouteController.extend({
  layoutTemplate: 'appLayout'
});

AppController.events({
  'click [data-action=logout]' : function() {
    AccountsTemplates.logout();
  }
});

// Public Controller
PublicController = RouteController.extend({
  layoutTemplate: 'publicLayout'
});

PublicController.events({
  'click [data-action=logout]' : function() {
    AccountsTemplates.logout();
  }
});