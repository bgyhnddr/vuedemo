export function getUser(state) {
  if (state.auth.isLogin) {
    return state.auth.userInfo
  }
  else {
    return undefined
  }
}

export function isShowLoginModal(state) {
  return state.auth.showLoginModal
}