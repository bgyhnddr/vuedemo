<template>
    <router-view></router-view>
</template>
<script>
import store from './vuex/store' // import 我们刚刚创建的 store
import { dropdown,navbar }  from 'vue-strap'
import { login,logout } from './vuex/actions'
import authAPI from './api/auth'

export default { 
    store,
    data(){ 
        return { 
            show:true 
        } 
    },
    vuex:{
        actions:{
            login
        }
    }, 
    components:{
        navbar,
        dropdown
    },
    ready(){
        var vm = this;
        authAPI.getUser()
        .then((userInfo)=>{ 
            vm.login(userInfo)})
        .catch(err=>vm.logout());
    }
}
</script>