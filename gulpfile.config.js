'use strict';
var GulpConfig = (function () {
    function gulpConfig() {
        //Got tired of scrolling through all the comments so removed them
        //Don't hurt me AC :-)
        this.source = './src/';
        this.dest = './dist/';
        this.sourceApp = this.source + 'app/';
        this.destApp = this.dest + 'app/'

        this.tsOutputPath = this.dest;
        this.allJavaScript = [this.destApp + '/**/*.js'];
        this.allTypeScript = this.sourceApp + '/**/*.ts';

        this.typings = './typings/';
        this.libraryTypeScriptDefinitions = './typings/globals/**/*.ts';
    }
    return gulpConfig;
})();
module.exports = GulpConfig;