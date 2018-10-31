import request from '../common/request'

// 获取我的客户
export function getCustomerList(invitationCode) {
    return request({
        url: '/api/apply/myCustomerlist/' + invitationCode,
        method: 'post'
    })
}

// 获取钉钉的基本配置
export function getConfig() {
    return request({
        url: '/api/config?key=iNoI123s22',
        method: 'post'
    })
}

// 获取钉钉用户信息
export function getUserinfo(code) {
    return request({
        url: '/api/userinfo?code=' + code,
        method: 'GET'
    })
}

// 获取邀请码
export function getMiniQrCode(employeeId) {
    return request({
        url: '/api/wechat/getMiniQrCode?employeeId=' + employeeId,
        method: 'POST'
    })
}