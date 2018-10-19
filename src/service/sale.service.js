import request from '../common/request'

export function getCode(mobile) {
    return request({
        url: '/h5/member/send-code',
        method: 'post',
        data: {
            mobile
        }
    })
}