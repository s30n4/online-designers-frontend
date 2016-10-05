module.exports = function( grunt ) {

  grunt.registerTask('common.javascripts'
  , 'preparing common javascripts'
  , function() {
    grunt.log.writeln('preparing common javascripts');
    grunt.task.run([
      'concat:common_javascripts'
    ]);
  });

  grunt.registerTask('common.stylesheets'
  , 'preparing common stylesheets'
  , function() {
    grunt.log.writeln('preparing common stylesheets');
    grunt.task.run([
      'sass:common',
      'concat:common_stylesheets'
    ]);
  });

  grunt.registerTask('common.templates'
  , 'preparing common templates'
  , function() {
    grunt.log.writeln('preparing common templates');
    grunt.task.run([
      'copy:common_templates'
    ]);
  });

  grunt.registerTask('common'
  , 'preparing common javascripts/tylesheets'
  , function() {
    grunt.log.writeln('preparing common javascripts/stylesheets');
    grunt.task.run([
      'common.javascripts',
      'common.stylesheets',
      'common.templates'
    ]);
  });

}
