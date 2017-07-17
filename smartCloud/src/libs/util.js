let util = {

};
util.title = function(title) {
    title = title ? title + ' - Home' : '分销系统管理员后台';
    window.document.title = title;
};


// const ajaxUrl = env === 'development' ?
//     'http://120.26.4.86:4396' :
//     env === 'production' ?
//     'https://www.url.com' :
//     'https://debug.url.com';

// util.ajax = axios.create({
//     baseURL: ajaxUrl,
//     timeout: 60000
// });

export default util;