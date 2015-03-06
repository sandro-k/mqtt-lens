module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            // watch for SCSS files and compile to css
            sass: {
                files: ['src/sass/*.scss'],
                tasks: ['sass'],
                options: {
                    // use live reload that is build in with grunt watch and use default port
                    livereload: {
                        port: 35730
                    }
                }
            },
            html: {
                files: ['demo.html', 'mqtt-lens.html', 'index.html'],
                options: {
                    // use live reload that is build in with grunt watch and use default port
                    livereload: {
                        port: 35730
                    }
                }
            }
        },
        // the SASS task
        sass: {
            dist: {                            // Target
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['mqtt-lens.scss'],
                    dest: '.',
                    ext: '.css'
                }]
            }
        },
        connect: {
            server: {
                options: {
                    open: {
                        target: 'http://localhost:9002/mqtt-lens/demo.html'
                    },
                    port: 9002,
                    base: '../.'
                }
            }
        }

    });


    // a task that creates the initial folder structure and copies some dependencies
    grunt.registerTask('init');

    // a task that builds the overall app
    grunt.registerTask('build', ['sass']);

    grunt.registerTask('srv', ['build', 'connect', 'watch']);

    // load sass
    grunt.loadNpmTasks('grunt-contrib-sass');

    // watch
    grunt.loadNpmTasks('grunt-contrib-watch');

    // connect
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task(s).
    grunt.registerTask('default', ['build']);


};
