/*global module:false*/
module.exports = function (grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - <%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      ' * <%= pkg.author.name %>\n' +
      '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
      ' *\n' +
      ' * Copyright (c) <%= grunt.template.today("yyyy") %>' +
      ' Licensed <%= pkg.license %>\n' +
      ' */\n',
    // Task configuration.
    clean: {
      dist: ['dist']
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['dist/<%= pkg.name %>.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    copy: {
      dist: {
        expand: true,
        cwd: 'lib',
        src: ['**/*.js'],
        dest: 'dist'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        src: ['lib/**/*.js']
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib: {
        files: '<%= jshint.lib.src %>',
        tasks: ['build']
      }
    },
    shell: {
      commitDist: {
        command: 'git commit -m "commit dist" ./dist/'
      }
    },
    changelog: {},
    release: {
      bump: {
        options: {
          bump: true,
          add: false,
          commit: false,
          tag: false,
          push: false,
          pushTags: false,
          npm : false
        }
      },
      publish: {
        options: {
          bump: false,
          commitMessage: 'bump version <%= version %>',
          push: true,
          pushTags: true,
          npm : true,
          github: {
            repo: 'stephanebachelier/navitia',
            usernameVar: 'stephanebachelier',
            passwordVar: 'GITHUB_API_TOKEN'
          }
        }
      }
    }
  });

  grunt.registerTask('dist', function () {
    var version = grunt.option('type') || 'patch'; // default to patch
    grunt.log.writeln('dist', version);
    grunt.task.run('release:bump:' + version);
    grunt.task.run('build');
    grunt.task.run('shell:commitDist');
    grunt.task.run('release:publish');
  });
  // Default task.
  grunt.registerTask('default', 'build');

  grunt.registerTask('build', ['clean:dist', 'jshint:lib', 'copy:dist', 'concat:dist']);

};
