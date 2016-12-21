import uglify from 'rollup-plugin-uglify';

export default {
    entry     : 'ng2-simple-page-scroll.js',
    dest      : 'bundles/ng2-simple-page-scroll.umd.min.js',
    format    : 'umd',
    external  : [
        '@angular/core',
        '@angular/router',
        '@angular/platform-browser',
        '@angular/common'
    ],
    globals   : {
        '@angular/core': 'ng.core',
        '@angular/router': 'ng.router',
        '@angular/platform-browser': 'ng.platform-browser',
        '@angular/common': 'ng.common'
    },
    moduleName: 'ng2.simple.page.scroll',
    plugins: [
        uglify()
    ]
}
