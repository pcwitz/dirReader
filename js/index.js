'use strict';

var $ = require('jquery');
var data = require('../../common/data');

var url = 'http://api.ahcsdev.ibx.com/claimweb/dirReader?callback=?';
var path = {path: '../../wwwroot/claimweb/staticreports'};

data.request(url, path, function(files) {

  if (files) {
    // has files
    var list = '<ol>';
    var openLink = '<li><a href="';
    var closeLink = '">';
    var closeListItem = '</a></li>';

    $.each(files, function(key, file) {
      list += openLink + file + closeLink;

      var asp = file.endsWith('.asp');
      if (asp) {
        var reportName = file.replace('.asp', '');
        list += reportName;
      } else {
        list += file;
      }
      list += closeListItem;
    });
    list += '</ol>';
    $('#files-list').html(list);
  } else {
    // empty directory
    return false;
  }
});