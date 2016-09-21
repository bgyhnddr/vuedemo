import {
    LOGIN,
    LOGOUT,
    SHOWLOGINMODAL,
    HIDELOGINMODAL
} from '../mutation-type'

const state = {
    userInfo: {},
    isLogin: false,
    showLoginModal: false
}

const mutations = {
    [LOGIN](state, userInfo) {
        state.userInfo = userInfo
        state.isLogin = true
    },
    [LOGOUT](state) {
        state.userInfo = {}
        state.isLogin = false
    },
    [SHOWLOGINMODAL](state) {
        state.showLoginModal = true
    },
    [HIDELOGINMODAL](state) {
        state.showLoginModal = false
    }
}

export default {
    state,
    mutations
}