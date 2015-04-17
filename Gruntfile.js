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
});

//Grunt 
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default', ['concat', 'watch']);
grunt.loadNpmTasks('grunt-contrib-jshint');
};



