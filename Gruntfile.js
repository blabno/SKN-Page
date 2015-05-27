module.exports = function (grunt)
{

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);


    var config = {
        app: './app'
    };

    grunt.initConfig({

        // Project settings
        config: config,

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            }, all: {
                src: ['app/*.js']
            }
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= config.app %>/**/*.js', '<%= config.app %>/**/*.html', '<%= config.app %>/**/*.css'
                ]
            }
        },
        connect: {
            options: {
                port: grunt.option('frontend-port') || 9000,
                hostname: grunt.option('frontend-url') || 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function (connect)
                    {
                        return [
                            connect.static(config.app)
                        ];
                    }
                }
            },
            distPreview: {
                options: {
                    open: true,
                    middleware: function (connect)
                    {
                        return [
                            connect.static(config.dist), require('grunt-connect-proxy/lib/utils').proxyRequest
                        ];
                    }
                }
            }
        },
        wiredep: {
            app: {
                src: ['<%= config.app %>app/index.html'],
                exclude: [],
                ignorePath: '<%= config.app %>/'
            }
        }
    });

    grunt.registerTask('serve', 'Compile then start a connect web server', [
        'connect:livereload', 'watch'
    ]);
};
