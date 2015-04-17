//Grunt tasks

module.exports = function(grunt) {

// Project configuration. 
grunt.initConfig({
  concat: {
    js: {
      src: ['views/js/*.js'],
      dest: 'build/js/script.js',
    },
    css: {
      src: ['views/css/*.css'],
      dest: 'build/css/styles.css',
    },
  },
  watch: {
  	js: {
      files: ['views/js/**/*.js'],
      tasks: ['concat'],
  		}
    },
  jshint: {
    all: ['Gruntfile.js', 'views/js/*.js']
  },
  uglify: {
    my_target: {
      files: {
        'dest/output.min.js': ['src/input1.js', 'src/input2.js']
      }
    }
  }
});

//Grunt 
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default', ['concat', 'watch']);
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-jshint');
};



