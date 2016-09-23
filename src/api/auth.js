var Vue = require('vue')
Vue.use(require('vue-resource'))


export default {
    login(params) {
        return new Promise(function (resolve, reject) {
            Vue.http.post('/login', params).then(function (res) {
                if (res.ok) {
                    resolve(res.body)
                }
            })
        })
    },
    logout(){
        return new Promise(function (resolve, reject) {
            Vue.http.get('/logout').then(function (res) {
                if (res.ok) {
                    resolve()
                }
            })
        })
    },
    getUser() {
        return new Promise(function (resolve, reject) {
            Vue.http.get('/getUser').then(function (res) {
                if (res.ok) {
                    if (res.body.name) {
                        resolve(res.body)
                    }
                    else
                    {
                        reject("error")
                    }
                }
            })
        })
    }
}