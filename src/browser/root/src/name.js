/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

// Collection method.
$.fn.awesome = function() {
  return this.each(function(i) {
    // Do something awesome to each selected element.
    $(this).html('awesome' + i);
  });
};