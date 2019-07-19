let util = {

};
util.title = function (title) {
  title = title ? title + ' - 郝晓龙' : '首页 - 郝晓龙';
  window.document.title = title;
};

export default util;
