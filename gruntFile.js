module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['browserify', 'watch']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      main: {
        src: 'js/main.js',
        dest: 'build/output.js'
      }
    },
    watch: {
      files: 'js/*',
      tasks: ['browserify']
    }
  });
}