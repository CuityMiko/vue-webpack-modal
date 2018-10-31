import request from '../common/request'

// 海报创建
export function createPoster(data) {
    return request({
        url: '/api/poster/create',
        method: 'post',
        data: data
    })
}

// 海报详情
export function getPosterDetail(posterId) {
    return request({
        url: '/api/poster/getPosterDetail/' + posterId,
        method: 'post'
    })
}