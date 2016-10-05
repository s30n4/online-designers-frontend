module.exports = function( grunt, config ) {
  return {
    jquery: {
      src: config.paths.bower + '/jquery/dist/jquery.min.js',
      dest: config.paths.public + '/javascripts/common/jquery.min.js'
    },
    angular: {
      src: config.paths.bower + '/angular/angular.min.js',
      dest: config.paths.public + '/javascripts/common/angular.min.js'
    },
    foundation_css: {
      src: config.paths.bower + '/foundation_sites/dist/foundation.min.css',
      dest: config.paths.public + '/stylesheets/common/foundation.min.css'
    },
    foundation_js: {
      src: config.paths.bower + '/foundation-sites/dist/foundation.min.js',
      dest: config.paths.public + '/javascripts/common/foundation.min.js'
    },
    fontawesome: {
      expand: true,
      cwd: config.paths.bower + '/font-awesome/fonts',
      src: '**',
      dest: config.paths.public + '/fonts/fontawesome',
      flatten: true,
      filter: 'isFile'
    },
    common_templates: {
      expand: true,
      cwd: config.paths.src + '/javascripts/common/templates/',
      src: '*.html',
      dest: config.paths.public + '/javascripts/common/templates',
      flatten: true,
      filter: 'isFile'
    },
    back_templates: {
      expand: true,
      cwd: config.paths.src + '/javascripts/back/templates/',
      src: '**/*.html',
      dest: config.paths.public + '/javascripts/back/templates',
      filter: 'isFile'
    },
    front_templates: {
      expand: true,
      cwd: config.paths.src + '/javascripts/front/pages',
      src: '**/templates/**/*.html',
      dest: config.paths.public + '/javascripts/front/pages',
      filter: 'isFile'
    }
  }
}
