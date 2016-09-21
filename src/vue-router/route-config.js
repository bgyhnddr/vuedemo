export function configRouter(router) {
    router.map({
        '/index':
        {
            component: require('../components/Master.vue')
            // subRoutes:
            // {
            //     'vuex': {
            //         component: require('../components/Vuex.vue')
            //     }
            // }
        }
    })
    router.redirect({
        '/': '/index'
    })


}