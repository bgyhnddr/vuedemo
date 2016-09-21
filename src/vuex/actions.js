import * as types from './mutation-type.js'

export const login = function ({ dispatch }, loginInfo) {
  dispatch(types.LOGIN, loginInfo)
}

export const logout = function ({ dispatch }, loginInfo) {
  dispatch(types.LOGOUT, loginInfo)
}

export const showLoginModal = function ({ dispatch }) {
  dispatch(types.SHOWLOGINMODAL)
}

export const hideLoginModal = function ({ dispatch }) {
  dispatch(types.HIDELOGINMODAL)
}