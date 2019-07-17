let util = {

};
util.title = function (title) {
  title = title ? title + ' - Home' : 'Home';
  window.document.title = title;
};

export default util;
