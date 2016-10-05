module.exports = function( grunt, config ) {
  return {
    head: {
      files: {
        './public/javascripts/common/head.min.js' : [
          config.paths.public + '/javascripts/common/head.js'
        ]
      }
    }
  }
}
