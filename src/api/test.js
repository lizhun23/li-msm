import request from '@/utils/request'

const BASE_URI=process.env.VUE_APP_BASE_API;

/* request.get('/db.json').then(response=>{
    console.log(response.data);
}) */

//测试2
request({
    method: 'get',
    url: '/db.json' ///db.json
}).then(response => {
    console.log('get2', response.data)
})

export default {
    getList() {
        const req = request({
            method: 'get',
            url: '/db.json'
        })
        return req;
    }
}