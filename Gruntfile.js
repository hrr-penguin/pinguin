module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // concat: {
    //   options: { separator: ';' },
    //   public: {
    //     src: [
    //       'public/bundle.js'
    //     ],
    //     dest: 'public/gruntfile.js'
    //   }
    // },
    exec: {
      // webpack: {
       command: 'webpack'
      // }
    },

    // mochaTest: {
    //   test: {
    //     options: {
    //       reporter: 'spec'
    //     },
    //     src: ['test/**/*.js']
    //   }
    // },

    nodemon: {
      dev: {
        script: 'server/server.js'
      }
    },

    uglify: {
      public: {
        src: ['client/public/dist/bundle.js'],
        dest: 'client/public/dist/main.min.js'
      }
    },



    eslint: {
      target: ['client/**/*.js', 'client/public/dist/**/*.js']
    },

    cssmin: {
      public: {
        src: ['client/style/*.css'],
        dest: 'client/public/dist/style.min.css'
      }
    },

    watch: {
      scripts: {
        files: [
          'client/public/dist/**/*.js'
          // 'client/lib/**/*.js',
        ],
        tasks: [
          'uglify'
        ]
      },
      css: {
        files: 'client/style/*.css',
        tasks: ['cssmin']
      }
    },

    shell: {
      prodServer: {
        command: 'git push live master',
        options: {
          stdout: true,
          stderr: true,
          failOnError: true
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-exec');
  //grunt.loadNpmTasks("grunt-webpack");

  grunt.registerTask('server-dev', function(target) {
    grunt.task.run(['nodemon', 'watch']);
  });

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  // grunt.registerTask('test', [
  //   'eslint', 'mochaTest'
  // ]);

  grunt.registerTask('build', ['exec','uglify', 'cssmin']);
  grunt.registerTask('default', ['build']);


  // grunt.registerTask('upload', function(n) {
  //   if (grunt.option('prod')) {
  //     grunt.task.run('shell:prodServer');
  //   } else {
  //     grunt.task.run(['server-dev']);
  //   }
  // });

  // grunt.registerTask('deploy', [
  //   'test',
  //   'build',
  //   'upload'
  // ]);


};
