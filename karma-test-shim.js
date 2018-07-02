var karma = window.__karma__;

function isSpecFile(filePath) {
    return filePath.startsWith("/base/test/") && filePath.slice(-8) === ".spec.js";
}

function importModule(modulePath) {
    return System.import(modulePath);
}

window.Error.stackTraceLimit = Infinity;
window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

karma.loaded = function () {};

System.config({

    baseURL: "./base/",

    paths: {
        "lib:": "dist/@ng-dynamic-forms/",
        "npm:": "node_modules/"
    },

    map: {
        "@angular/animations": "npm:@angular/animations/bundles/animations.umd.js",
        "@angular/animations/browser": "npm:@angular/animations/bundles/animations-browser.umd.js",
        "@angular/animations/testing": "npm:@angular/animations/bundles/animations-browser-testing.umd.js",
        "@angular/cdk/a11y": "npm:@angular/cdk/bundles/cdk-a11y.umd.js",
        "@angular/cdk/accordion": "npm:@angular/cdk/bundles/cdk-accordion.umd.js",
        "@angular/cdk/bidi": "npm:@angular/cdk/bundles/cdk-bidi.umd.js",
        "@angular/cdk/coercion": "npm:@angular/cdk/bundles/cdk-coercion.umd.js",
        "@angular/cdk/collections": "npm:@angular/cdk/bundles/cdk-collections.umd.js",
        "@angular/cdk/keycodes": "npm:@angular/cdk/bundles/cdk-keycodes.umd.js",
        "@angular/cdk/layout": "npm:@angular/cdk/bundles/cdk-layout.umd.js",
        "@angular/cdk/observers": "npm:@angular/cdk/bundles/cdk-observers.umd.js",
        "@angular/cdk/overlay": "npm:@angular/cdk/bundles/cdk-overlay.umd.js",
        "@angular/cdk/platform": "npm:@angular/cdk/bundles/cdk-platform.umd.js",
        "@angular/cdk/portal": "npm:@angular/cdk/bundles/cdk-portal.umd.js",
        "@angular/cdk/rxjs": "npm:@angular/cdk/bundles/cdk-rxjs.umd.js",
        "@angular/cdk/scrolling": "npm:@angular/cdk/bundles/cdk-scrolling.umd.js",
        "@angular/cdk/stepper": "npm:@angular/cdk/bundles/cdk-stepper.umd.js",
        "@angular/cdk/table": "npm:@angular/cdk/bundles/cdk-table.umd.js",
        "@angular/cdk/text-field": "npm:@angular/cdk/bundles/cdk-text-field.umd.js",
        "@angular/cdk/tree": "npm:@angular/cdk/bundles/cdk-tree.umd.js",
        "@angular/common": "npm:@angular/common/bundles/common.umd.js",
        "@angular/common/http": "npm:@angular/common/bundles/common-http.umd.js",
        "@angular/common/testing": "npm:@angular/common/bundles/common-testing.umd.js",
        "@angular/compiler": "npm:@angular/compiler/bundles/compiler.umd.js",
        "@angular/compiler/testing": "npm:@angular/compiler/bundles/compiler-testing.umd.js",
        "@angular/core": "npm:@angular/core/bundles/core.umd.js",
        "@angular/core/testing": "npm:@angular/core/bundles/core-testing.umd.js",
        "@angular/platform-browser": "npm:@angular/platform-browser/bundles/platform-browser.umd.js",
        "@angular/platform-browser/animations": "npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js",
        "@angular/platform-browser/testing": "npm:@angular/platform-browser/bundles/platform-browser-testing.umd.js",
        "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
        "@angular/platform-browser-dynamic/testing": "npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js",
        "@angular/http": "npm:@angular/http/bundles/http.umd.js",
        "@angular/http/testing": "npm:@angular/http/bundles/http-testing.umd.js",
        "@angular/material": "npm:@angular/material/bundles/material.umd.js",
        "@angular/router": "npm:@angular/router/bundles/router.umd.js",
        "@angular/router/testing": "npm:@angular/router/bundles/router-testing.umd.js",
        "@angular/forms": "npm:@angular/forms/bundles/forms.umd.js",
        "@angular/forms/testing": "npm:@angular/forms/bundles/forms-testing.umd.js",
        "@ionic/angular": "npm:@ionic/angular/dist/ionic.js",
        "@ng-bootstrap/ng-bootstrap": "npm:@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js",
        "@ng-dynamic-forms/core": "lib:core/bundles/core.umd.js",
        "@ng-dynamic-forms/ui-basic": "lib:ui-basic/bundles/ui-basic.umd.js",
        "@ng-dynamic-forms/ui-bootstrap": "lib:ui-bootstrap/bundles/ui-bootstrap.umd.js",
        "@ng-dynamic-forms/ui-foundation": "lib:ui-foundation/bundles/ui-foundation.umd.js",
        "@ng-dynamic-forms/ui-kendo": "lib:ui-kendo/bundles/ui-kendo.umd.js",
        "@ng-dynamic-forms/ui-material": "lib:ui-material/bundles/ui-material.umd.js",
        "@ng-dynamic-forms/ui-ng-bootstrap": "lib:ui-ng-bootstrap/bundles/ui-ng-bootstrap.umd.js",
        "@ng-dynamic-forms/ui-primeng": "lib:ui-primeng/bundles/ui-primeng.umd.js",
        "@progress": "npm:@progress",
        "@progress/kendo-angular-dateinputs": "npm:@progress/kendo-angular-dateinputs/dist/npm/main.js",
        "@progress/kendo-angular-dropdowns": "npm:@progress/kendo-angular-dropdowns/dist/npm/main.js",
        "@progress/kendo-angular-inputs": "npm:@progress/kendo-angular-inputs/dist/npm/main.js",
        "@progress/kendo-angular-intl": "npm:@progress/kendo-angular-intl/dist/npm/main.js",
        "@progress/kendo-angular-l10n": "npm:@progress/kendo-angular-l10n/dist/npm/main.js",
        "@progress/kendo-angular-popup": "npm:@progress/kendo-angular-popup/dist/npm/main.js",
        "@progress/kendo-angular-resize-sensor": "npm:@progress/kendo-angular-resize-sensor/dist/npm/main.js",
        "@progress/kendo-angular-upload": "npm:@progress/kendo-angular-upload/dist/npm/main.js",
        "@progress/kendo-date-math": "npm:@progress/kendo-date-math/dist/npm/main.js",
        "@progress/kendo-popup-common": "npm:@progress/kendo-popup-common/dist/npm/main.js",
        "@telerik": "npm:@telerik",
        "@telerik/kendo-draggable": "npm:@telerik/kendo-draggable/dist/npm/main.js",
        "@telerik/kendo-dropdowns-common": "npm:@telerik/kendo-dropdowns-common/dist/npm/main.js",
        "@telerik/kendo-inputs-common": "npm:@telerik/kendo-inputs-common/dist/npm/main.js",
        "@telerik/kendo-intl": "npm:@telerik/kendo-intl/dist/npm/main.js",
        "angular2-text-mask": "npm:angular2-text-mask/dist/angular2TextMask.js",
        "ngx-bootstrap/datepicker": "npm:ngx-bootstrap/bundles/ngx-bootstrap.umd.min.js",
        "ngx-bootstrap/timepicker": "npm:ngx-bootstrap/bundles/ngx-bootstrap.umd.min.js",
        "primeng": "npm:primeng",
        "rxjs": "npm:rxjs",
        "rxjs/ajax": "npm:rxjs/ajax",
        "rxjs/internal-compatibility": "npm:rxjs/internal-compatibility",
        "rxjs/operators": "npm:rxjs/operators",
        "rxjs/testing": "npm:rxjs/testing",
        "rxjs/websocket": "npm:rxjs/websocket",
        "rxjs-compat": "npm:rxjs-compat",
        "text-mask-core": "npm:text-mask-core",
        "tslib": "npm:tslib/tslib.js"
    },

    packages: {
        "@ng-dynamic-forms": {
            defaultExtension: "js"
        },
        "@progress": {
            defaultExtension: "js"
        },
        "@telerik": {
            defaultExtension: "js"
        },
        "primeng": {
            defaultExtension: "js"
        },
        "rxjs": {
            main: "index.js",
            defaultExtension: "js",
        },
        "rxjs/ajax": {
            main: "index.js",
            defaultExtension: "js"
        },
        "rxjs/internal-compatibility": {
            main: "index.js",
            defaultExtension: "js"
        },
        "rxjs/operators": {
            main: "index.js",
            defaultExtension: "js"
        },
        "rxjs/testing": {
            main: "index.js",
            defaultExtension: "js"
        },
        "rxjs/websocket": {
            main: "index.js",
            defaultExtension: "js"
        },
        "rxjs-compat": {
            main: "Rx.js",
            defaultExtension: "js"
        },
        "test": {
            defaultExtension: "js",
            meta: {
                "./*.js": {
                    loader: "systemjs-angular-loader.js"
                }
            }
        },
        "text-mask-core": {
            defaultExtension: "js"
        }
    }
});

Promise.all([

    System.import("@angular/core/testing"),
    System.import("@angular/platform-browser-dynamic/testing")

]).then(function (modules) {

    var ngCoreTesting                   = modules[0],
        ngPlatformBrowserDynamicTesting = modules[1];

    return ngCoreTesting.TestBed.initTestEnvironment(
        ngPlatformBrowserDynamicTesting.BrowserDynamicTestingModule,
        ngPlatformBrowserDynamicTesting.platformBrowserDynamicTesting());

}).then(function () {

    return Promise.all(Object.keys(karma.files)
                             .filter(isSpecFile)
                             .map(importModule));

}).then(karma.start, karma.error);