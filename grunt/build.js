module.exports = function( grunt, config ) {

  grunt.registerTask('build'
  , 'building all required stylesheets/javascripts'
  , function() {
    grunt.log.writeln('building all required stylesheets/javascripts');
    grunt.task.run([
      'cleanall',
      'fontawesome',
      'foundation',
      'copy:jquery',
      'copy:angular',
      'head',
      'build.common',
      'build.back',
      'build.front',
      'concat:foundation_fontawesome'
    ])
  });

}
