module.exports = function( grunt ) {

  grunt.registerTask('build.front'
  , 'building required stylesheets/javascripts related to front pages'
  , function() {
    grunt.log.writeln('building required stylesheets/javascripts related to front pages');
    grunt.task.run([
      'front'
    ])
  });

}
