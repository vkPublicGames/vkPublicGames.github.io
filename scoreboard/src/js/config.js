requirejs.config({
    baseUrl: 'src/js',
    deps: ['index'],
    waitSeconds: 0,
    paths: {
        bootstrap: '../bootstrap/js/bootstrap.min'
    },
    shim: {

        bootstrap: {
            deps: ['jquery']
        }
    }
});

