module.exports = function( grunt, config ) {
  return {
    head: {
      src: [
        config.libs.javascripts.jquery,
        config.libs.javascripts.angular
      ],
      dest: config.paths.public + '/javascripts/common/head.js'
    },
    common_stylesheets : {
      src: config.libs.stylesheets.common,
      dest: config.paths.public + '/stylesheets/common/libs.css'
    },
    common_javascripts: {
      files: {
        './public/javascripts/common/libs.js': config.libs.javascripts.common,
        './public/javascripts/common/scripts.js': config.paths.src + '/javascripts/common/**/*.js'
      }
    },
    back_stylesheets: {
      src: config.libs.stylesheets.back,
      dest: config.paths.public + '/stylesheets/back/libs.css'
    },
    back_javascripts: {
      files: {
        './public/javascripts/back/libs.js': config.libs.javascripts.back,
        './public/javascripts/back/scripts.js': config.paths.src + '/javascripts/back/**/*.js'
      }
    },
    front_stylesheets: {
      src: config.libs.stylesheets.front,
      dest: config.paths.public + '/stylesheets/front/libs.css'
    },
    front_javascripts: {
      files: {
        './public/javascripts/front/libs.js': config.libs.javascripts.front.common,
        // './public/javascripts/front/pages/rigid/libs.js': config.libs.javascripts.front.rigid,
        // './public/javascripts/front/pages/rigid/scripts.js': config.paths.src + '/javascripts/front/pages/rigid/**/*.js',
        './public/javascripts/front/pages/hire/libs.js': config.libs.javascripts.front.hire,
        './public/javascripts/front/pages/hire/scripts.js': config.paths.src + '/javascripts/front/pages/hire/**/*.js'
      }
    },
    foundation_fontawesome: {
      files: {
        './public/stylesheets/common/libs.css': [
          config.paths.public + '/stylesheets/common/foundation.css',
          config.paths.public + '/stylesheets/common/fontawesome.css'
        ]
      }
    }
  }
}
