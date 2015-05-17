Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'template404'
});

Router.route('/', function () {
    this.render('home');
});

Router.route('/home', function () {
    this.render('home');
});

Router.route('/about', function () {
    this.render('about');
});