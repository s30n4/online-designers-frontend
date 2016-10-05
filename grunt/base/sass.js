module.exports = function( grunt, config ) {
  return {
    fontawesome: {
      options: {
        sourcemap: 'none',
        quiet: true,
        loadPath: config.paths.bower + '/font-awesome/scss/'
      },
      files: {
        './public/stylesheets/common/fontawesome.css':
        config.paths.src + '/stylesheets/common/vendors/fontawesome/fontawesome.sass'
      }
    },
    foundation: {
      options: {
        sourcemap: 'none',
        quiet: true,
        loadPath: [
          config.paths.bower + '/foundation-sites/scss/',
          config.paths.src + '/stylesheets/common/'
        ]
      },
      files: {
        './public/stylesheets/common/foundation.css':
        config.paths.src + '/stylesheets/common/vendors/foundation/foundation.sass'
      }
    },
    common: {
      options: {
        sourcemap: 'none',
        quiet: true,
        loadPath: [
          config.paths.bower + '/foundation-sites/scss/',
          config.paths.src + '/stylesheets/common/'
        ]
      },
      files: {
        './public/stylesheets/common/styles.css':
        config.paths.src + '/stylesheets/common/main.sass'
      }
    },
    back: {
      options: {
        sourcemap: 'none',
        quiet: true,
        loadPath: [
          config.paths.bower + '/foundation-sites/scss/',
          config.paths.src + '/stylesheets/common/'
        ]
      },
      files: {
        './public/stylesheets/back/styles.css':
        config.paths.src + '/stylesheets/back/main.sass'
      }
    },
    front: {
      options: {
        sourcemap: 'none',
        quiet: true,
        loadPath: [
          config.paths.bower + '/foundation-sites/scss/',
          config.paths.src + '/stylesheets/common/'
        ]
      },
      files: {
        './public/stylesheets/front/styles.css':
        config.paths.src + '/stylesheets/front/main.sass'
      }
    }
  }
}
