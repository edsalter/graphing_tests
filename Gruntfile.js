/* global module, require */

module.exports = function (grunt) {

    'use strict';

    var appBannerContent = '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        libBannerContent = '/*! lib.js - <%= grunt.template.today("yyyy-mm-dd") %> */\n';

    //require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    //grunt.loadTasks('test/lib');

    // Project configuration
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        concat: { // for options see https://github.com/gruntjs/grunt-contrib-concat
            options: {
                stripBanners: true,
                separator: ''
            },
            app: {
                src: [
                    'src/js/main.js'
                ],
                dest: 'build/js/concatenated-app.js'
            },
            data: {
                src: [
                    'mocks/data1.json'
                ],
                dest: 'build/js/data1.json'
            },
            lib: {
                src: [
                    'bower_components/angular/angular.min.js',
                    'bower_components/d3/d3.min.js',
                    'bower_components/nvd3/nv.d3.min.js',
                    'bower_components/angularjs-nvd3-directives/dist/angularjs-nvd3-directives.min.js'
                ],
                dest: 'build/js/lib.js'
            },
            css: {
                src: [
                    'bower_components/nvd3/nv.d3.min.css'
                ],
                dest: 'build/css/concat.css'
            }
 //           uglify: {
//                app: {
//                    options: {
//                        banner: appBannerContent,
//                        mangle: false, // Specify 'mangle: false' to prevent changes to your variable and function names.
//                        compress: true,
//                        report: 'min'
//                        //sourceMap: 'dist/js/app.min.map', // Location of source map file
//                        //sourceMapRoot: '<%= pkg.siteUrl %>/generated_files/pub_module/script/s331.js', // Original uncompressed js file location
//                        //sourceMappingURL: '<%= pkg.siteUrl %>/generated_files/pub_module/script/s423.map' // Location of source map file. This gets appended to minified js.
//                    },
//                    src: 'build/js/concatenated-app.js',
//                    dest: 'build/js/concatenated-app.min.js'
//                }
//            }

        }
    });
    // These plugins provide necessary tasks.
//    grunt.loadNpmTasks('grunt-contrib-uglify');
//    grunt.loadNpmTasks('grunt-contrib-jshint');
//    grunt.loadNpmTasks('grunt-contrib-qunit');
//    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');


    // Default task.
    grunt.registerTask('default', ['concat']);
};

// NOTE: run 'npm install' and it will download all devDependencies specified in package.json to 'node_modules' in your project folder

