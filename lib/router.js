Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'template404'
});

Router.route('/', function () {
    this.render('home');
});