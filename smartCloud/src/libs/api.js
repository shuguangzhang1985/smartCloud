import { getJson, getJsonWithFilter, postJson } from './fetch-util'






/**
 * 登录
 * @param {*} username 
 * @param {*} password 
 */
export function postLogin(username,password){
    return postJson('/login',{username,password})
}
/**
 * 退出登录
 */
export function postLogout(){
    return postJson('/logout')
}
/**
 * 校验是否登录
 */
export function checkLogin(){
    return getJson('/index')
}
/**
 * 主题列表
 */
export function getThemeList(pageNum,row){
    return getJson('/theme/list',{page_num:pageNum,rows:row})
}
/**
 * 阿里云获取token
 */
export function getAliyunToken(bucket){
    return getJson('/aliyun/token',{bucket})
}

/**
 * 新增主题
 */
export function postFormData(formdata){
    return postJson('/theme/add',formdata)
}

/**
 * 主题详情
 */
export function getInfo(id){
    return getJson('/theme/info',{id:id})
}
/**
 * 修改主题
 */
export function modifyFormData(formdata){
    return postJson('/theme/update',formdata)
}


/**
 * 删除主题
 */
export function removeTheme(id){
    return postJson('/theme/remove',{id:id})
}

/**
 * 撤销删除主题
 */
export function undoRemoveTheme(id){
    return postJson('/theme/undo/remove',{id:id})
}

/**
 * 下架主题
 */
export function downTheme(id){
    return postJson('/theme/down',{id:id})
}

/**
 * 上架主题
 */
export function upTheme(id){
    return postJson('/theme/up',{id:id})
}

/**
 * 关联子主题列表页面
 */
export function getChileThemelist(id){
    return getJson('/theme/set/list',{id:id})
}

/**
 * 关联子主题提交
 */
export function modifyChileThemelist(id,resIds){
    return postJson('/theme/set/go',{id:id,res_id:resIds})
}