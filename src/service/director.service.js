import request from '../common/request'

// 获取标题栏是否已经签到的信息
export function getHeaderInfo() {
    return request({
        url: '/api/apply/getApplyManagerBaseInfo',
        method: 'post'
    })
}

// 获取已分组的列表
export function getGroupList() {
    return request({
        url: '/api/apply/groupedlist',
        method: 'post'
    })
}

// 获取未分组的列表
export function getNoGroupList() {
    return request({
        url: '/api/apply/notGroupedlist',
        method: 'post'
    })
}

// 设置分区
export function updateApplyGroup(applyId, groupArea) {
    return request({
        url: '/api/apply/updateApplyGroup?applyId=' + applyId + '&groupArea=' + groupArea,
        method: 'post'
        
    })
}

// 获取能分组的信息 如：ABCDEFG
export function getGroupInfo(posterId) {
    return request({
        url: '/api/poster/getGroupInfo/' + posterId,
        method: 'post'
    })
}