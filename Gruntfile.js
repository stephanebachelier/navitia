/*global module:false*/
module.exports = function (grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      ' * <%= pkg.author.name %>\n' +
      '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
      ' *\n' +
      ' * Copyright (c) <%= grunt.template.today("yyyy") %>' +
      ' Licensed <%= pkg.license %>\n' +
      ' */\n',
    // Task configuration.
    clean: {
      build: ['dist']
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['lib/<%= pkg.name %>.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    copy: {
      files: {
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
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib: {
        files: '<%= jshint.lib.src %>',
        tasks: ['jshint:lib']
      }
    },
    release: {
      commitMessage: 'bump version <%= version %>',
      github: {
        repo: 'stephanebachelier/navitia',
        usernameVar: 'stephanebachelier',
        passwordVar: 'GITHUB_API_TOKEN'
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'build');

  grunt.registerTask('build', ['clean', 'jshint', 'concat', 'copy']);

};
