import request from '@/utils/request'


export function login(username, password) {
    return request({
        url: '/user/login',
        method: 'post',
        data: {
            username,
            password
        }
    })
}

/* export function getUserInfo(token) {
    return request({
        url: `/user/inof/${token}`,
        method: 'get'
    })
} */
//http://mengxuegu.com:7300/mock/5ef54f6179572d3cdb458ce6/user/info/admin

export function getUserInfo(token) {
    return request({
        url: `/user/info/${token}`,
        method: 'get'
    })
}