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
                    livereload: true
                }
            },
            html: {
                files: ['demo.html', 'mqtt-lens.html', 'index.html'],
                options: {
                    // use live reload that is build in with grunt watch and use default port
                    livereload: true
                }
            }
        },
        // the SASS task
        sass: {
            dist: {                            // Target
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['src/sass/main.scss', 'src/sass/debug.scss'],
                    dest: 'build/css',
                    ext: '.css'
                }]
            }
        }

    });


    // a task that creates the initial folder structure and copies some dependencies
    grunt.registerTask('init');

    // a task that builds the overall app
    grunt.registerTask('build', ['sass']);

    // load sass
    grunt.loadNpmTasks('grunt-contrib-sass');

    // watch
    grunt.loadNpmTasks('grunt-contrib-watch');


    // Default task(s).
    grunt.registerTask('default', ['build']);


};
