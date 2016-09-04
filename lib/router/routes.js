// Accounts Templates Config

AccountsTemplates.configureRoute('signIn', {
    path: '/login',
    template: 'login',  
    layoutTemplate: 'loginLayout',
    redirect: '/home'
});
AccountsTemplates.configureRoute('signUp', {
    layoutTemplate: 'loginLayout',
    redirect: '/home'
});


// App Configurations
Router.configure({
  controller: 'AppController',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/', {
  name: 'home',
  template: 'Home', 
  controller: 'HomeController',
  layoutTemplate: 'appLayout'
});


Router.plugin('ensureSignedIn', {
 except : ['atSignIn', 'atSignUp', 'atForgotPassword']  
});
