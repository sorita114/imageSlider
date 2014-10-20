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
          banner : '/*! <%= pkg.name %> -v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        files : {
          './dest/jquery-plugin/imageSlider.min.js' : ['./dest/jquery-plugin/imageSlider.js']
        }
      }
    },
    concat : {
      options : {
        stripBanners : true,
        banner : '/*! <%= pkg.name %> -v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      dist : {
        src : ['./lib/jquery-plugin/*.js'],
        dest : './dest/jquery-plugin/imageSlider.js'
      }
    },
    plato : {
      your_task : {
        files : {
          './report/output/jquery-plugin' : ['./lib/jquery-plugin/*.js']
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-plato');
  grunt.registerTask('default', ['concat', 'uglify','plato']);
};
