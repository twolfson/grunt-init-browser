/*
 * grunt
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt/blob/master/LICENSE-MIT
 */

// Basic template description.
exports.description = 'Generate and test multiple versions of a browser script';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  // Add on a keywords prompt
  grunt.helper('prompt_for_obj').keywords = {
    message: 'What keywords relate to this plugin (comma separated)?',
    'default': 'browser'
  };

  grunt.helper('prompt', {type: 'browser'}, [
    // Prompt for these values.
    grunt.helper('prompt_for', 'name'),
    grunt.helper('prompt_for', 'description', 'The best browser script ever.'),
    grunt.helper('prompt_for', 'version'),
    grunt.helper('prompt_for', 'repository'),
    grunt.helper('prompt_for', 'homepage'),
    grunt.helper('prompt_for', 'bugs'),
    grunt.helper('prompt_for', 'licenses'),
    grunt.helper('prompt_for', 'author_name'),
    grunt.helper('prompt_for', 'author_email'),
    grunt.helper('prompt_for', 'author_url'),
    grunt.helper('prompt_for', 'keywords')
  ], function(err, props) {
    // Set up package.json defaults
    props.npm_test = 'grunt qunit';
    props.dependencies = {};
    props.devDependencies = {
      grunt: "~0.3.17",
      'grunt-templater': "0.0.3-1",
      mustache: "~0.7.0"
    };
    props.main = 'src/' + props.name + '.js';
    props.engines = {
      node: "*"
    };

    // Break up the keywords by commas
    var keywords = props.keywords;
    keywords = keywords.split(',');

    // Trim each keyword and save
    keywords = keywords.map(function (str) {
      return str.trim();
    });
    props.keywords = keywords;

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {noProcess: 'libs/**'});

    // Generate package.json file.
    init.writePackageJSON('package.json', props);

    // All done!
    done();
  });

};
