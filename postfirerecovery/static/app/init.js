(function() {
    'use strict';

    // Bootstrap the app once
    angular.element(document).ready(function() {
        console.log('Bootstraping the app');
        angular.bootstrap(document.body, ['postfirerecovery']);
    });

    // All the dependencies come here
    angular.module('postfirerecovery', ['ui.router', 'ngSanitize', 'ngStorage'],
    function($interpolateProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    })
    .config(function($httpProvider) {
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });

})();
