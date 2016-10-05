module.exports = function( grunt ) {

  grunt.registerTask('build.back'
  , 'building required stylesheets/javascripts related to admin pages'
  , function() {
    grunt.log.writeln('building required stylesheets/javascripts related to admin pages');
    grunt.task.run([
      'back'
    ]);
  });

}
