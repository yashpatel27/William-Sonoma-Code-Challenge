module.exports = function (config) {
  config.set({
      basePath: '',
      frameworks: ['jasmine'],
      files: [        
        'https://code.jquery.com/jquery-1.11.2.min.js',
        'spec/*.spec.js',
        '*.js',
        'https://cdnjs.cloudflare.com/ajax/libs/three.js/r79/three.min.js'
      ],
      preprocessors: {
        '*.js': ['coverage']
      },
      plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-spec-reporter'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      ],
      reporters: ['spec','kjhtml', 'coverage'],
      port: 9878,
      colors: true,
      logLevel: config.LOG_DEBUG,
      autowatch: true,
      browsers: ['Chrome'],
      singleRun: false,
      concurrency: Infinity,
      coverageReporter: {
          includeAllSources: true,
          dir: 'coverage/',
          reporters: [
              { type: "html", subdir: "html" },
              { type: 'text-summary' }
          ]
      }
  });
};