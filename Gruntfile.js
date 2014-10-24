module.exports = function(grunt){
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
    uglify : {
      jquery_plugin : {
        options : {
          sourceMap : true,
          report: 'gzip',
          sourceMapName : './dest/jquery-plugin/imageSlide.map',
          compress : {
            drop_console : true
          },
          banner : '/*! <%= pkg.name %> -v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd h:MM:ss") %> */'
        },
        files : {
          './dest/jquery-plugin/imageSlider.min.js' : ['./dest/jquery-plugin/imageSlider.js']
        }
      }
    },
    concat : {
      jquery_plugin : {
        options : {
          stripBanners : true,
          banner : '/*! <%= pkg.name %> -v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd h:MM:ss") %> */'
        },
        dist : {
          src : ['./lib/jquery-plugin/*.js'],
          dest : './dest/jquery-plugin/imageSlider.js'
        }
      }
    },
    plato : {
      your_task : {
        files : {
          './report/output/jquery-plugin' : ['./lib/jquery-plugin/jquery-imageSlider.js',
                                              './lib/jquery-plugin/jquery-imageSliderNavigation.js',
                                              './lib/jquery-plugin/jquery-imageSliderRotate.js',
                                              './lib/jquery-plugin/jquery-imageSliderController.js',
                                            ]
        }
      }
    },
    jsdoc : {
      dist : {
        src : ['./dest/jquery-plugin/imageSlider.js', 'README.md'],
        options : {
          destination : './doc/jquery-plugin'
        }
      }
    },
    cssmin : {
      style_sheets : {
        options : {
          report : 'gzip',
          banner : '/*! <%= pkg.name %> -v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd h:MM:ss") %> */'
        },
        files : {
          './dest/css/imageSlider.min.css' : ['./lib/css/imageSlider.css', './lib/css/theme/*.css']
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-plato');
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['jsdoc', 'concat','cssmin', 'uglify','plato']);
};
