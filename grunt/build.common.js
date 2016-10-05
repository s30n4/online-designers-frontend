module.exports = function( grunt ) {

  grunt.registerTask('build.common'
  , 'building required stylesheets/javascripts which are common between front and admin pages'
  , function() {
    grunt.log.writeln('building required stylesheets/javascripts which are common between front and admin pages');
    grunt.task.run([
      'common'
    ]);
  });

}
