module.exports = function( grunt ) {

  grunt.registerTask('back.javascripts'
  , 'preparing back javascripts'
  , function() {
    grunt.log.writeln('preparing back javascripts');
    grunt.task.run([
      'concat:back_javascripts'
    ]);
  });

  grunt.registerTask('back.stylesheets'
  , 'preparing back stylesheets'
  , function() {
    grunt.log.writeln('preparing back stylesheets');
    grunt.task.run([
      'sass:back',
      'concat:back_stylesheets'
    ]);
  });

  grunt.registerTask('back.templates'
  , 'preparing back templates'
  , function() {
    grunt.log.writeln('preparing back templates');
    grunt.task.run([
      'copy:back_templates'
    ]);
  });

  grunt.registerTask('back'
  , 'preparing back javascripts/tylesheets'
  , function() {
    grunt.log.writeln('preparing back javascripts/stylesheets');
    grunt.task.run([
      'back.javascripts',
      'back.stylesheets',
      'back.templates'
    ]);
  });

}
