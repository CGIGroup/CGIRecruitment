(function (define){
    "use strict";

    define([], function() {
        var _vendorPath = "../../vendor/";

        require.config(
            {
                waitSeconds:120,
                appDir:'',
                baseUrl:'../app/src',
                paths: {
                    'jquery': _vendorPath + 'jquery/dist/jquery',
                    'uiBootstrap': _vendorPath + 'angular-bootstrap/ui-bootstrap-tpls',
                    'uiBootstrapDatetimePicr': _vendorPath + 'bootstrap-ui-datetime-picker/dist/datetime-picker',
                    'messageformat': _vendorPath + 'messageformat/messageformat',
                    'angular': _vendorPath + 'angular/angular',
                    'ngSanitize':_vendorPath + 'angular-sanitize/angular-sanitize',
                    'ngAnimate':_vendorPath + 'angular-animate/angular-animate',
                    'uiRouter': _vendorPath + 'angular-ui-router/release/angular-ui-router',
                    'uiRouterExtra': _vendorPath + 'ui-router-extras/release/ct-ui-router-extras',
                    'ngCookies':_vendorPath + 'angular-cookies/angular-cookies',
                    'ngTranslate':_vendorPath + 'angular-translate/angular-translate',
                    'ngTranslateLog':_vendorPath +'angular-translate-handler-log/angular-translate-handler-log',
                    'ngTranslateMesFormat':_vendorPath+'angular-translate-interpolation-messageformat/angular-translate-interpolation-messageformat',
                    'ngTranslateLoaderStaticFiles': _vendorPath +'angular-translate-loader-static-files/angular-translate-loader-static-files',
                    'tmhDynamicLocale':_vendorPath + 'angular-dynamic-locale/dist/tmhDynamicLocale',
                    'framework':'./framework',
                    'service':'./framework/service',
                    'controller':'./framework/controller',
                    'model':'./framework/model'
                },
                urlArgs:'v=1.0',
                shim :{
                    'angular':{ 'deps': ['jquery'],'exports':'angular' },
                    'ngAnimate':{ 'deps': ['angular'] },
                    'uiBootstrap':{ 'deps': ['angular'] },
                    'uiBootstrapDatetimePicr':{ 'deps': ['uiBootstrap'] },
                    'uiRouter':{ 'deps': ['angular','ngAnimate'] },
                    'uiRouterExtra':{ 'deps': ['uiRouter'] },
                    'ngSanitize':{ 'deps': ['angular'] },
                    'ngCookies':{ 'deps': ['angular'] },
                    'ngTranslate': { 'deps': ['angular','ngSanitize'] },
                    'ngTranslateLog': { 'deps': ['ngTranslate'] }, 
                    'ngTranslateMesFormat': { 'deps': ['messageformat','ngTranslate'] }, 
                    'ngTranslateLoaderStaticFiles': { 'deps': ['ngTranslate'] }, 
                    'tmhDynamicLocale':{ 'deps': ['angular'] },
                    'bootStrap':{ 'deps': ['jquery'] },
                    'service':{ 'deps': ['angular'] },
                    'controller':{ 'deps': ['angular', 'service'] }
                },
                priority: ['angular']
            }
        );
        return require.config;
    });
}(define));