
export function disableHistoryBack() {
    window.onpopstate = function () { history.pushState(null, null, location.href) }; history.pushState(null, null, location.href);
}