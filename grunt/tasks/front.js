module.exports = function( grunt ) {

  grunt.registerTask('front.javascripts'
  , 'preparing front javascripts'
  , function() {
    grunt.log.writeln('preparing front javascripts');
    grunt.task.run([
      'concat:front_javascripts'
    ]);
  });

  grunt.registerTask('front.stylesheets'
  , 'preparing front stylesheets'
  , function() {
    grunt.log.writeln('preparing front stylesheets');
    grunt.task.run([
      'sass:front',
      'concat:front_stylesheets'
    ]);
  });

  grunt.registerTask('front.templates'
  , 'preparing front templates'
  , function() {
    grunt.log.writeln('preparing front templates');
    grunt.task.run([
      'copy:front_templates'
    ]);
  });

  grunt.registerTask('front'
  , 'preparing front javascripts/tylesheets'
  , function() {
    grunt.log.writeln('preparing front javascripts/stylesheets');
    grunt.task.run([
      'front.javascripts',
      'front.stylesheets',
      'front.templates'
    ]);
  });

}
