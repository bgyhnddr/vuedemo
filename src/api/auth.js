const userInfo = {
    name: "test",
    role: "user"
}

export default {
    login(params) {
        return new Promise(function (resolve, reject) {
            resolve(userInfo);
        });
    },
    getUser() {
        return new Promise(function (resolve, reject) {
            resolve(userInfo);
        });
    }
}