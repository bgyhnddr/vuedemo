<template>
    <main-header></main-header>
    <router-view></router-view>
</template>

<script>
import MainHeader from './MainHeader'
import { dropdown,navbar }  from 'vue-strap'
import { login,logout } from '../vuex/actions'
import authAPI from '../api/auth'

export default {
    vuex:{
        actions:{
            login,
            logout
        }
    },
    components:{
        MainHeader
    },
    ready(){
        var vm = this;
        authAPI.getUser()
        .then((userInfo)=>{ 
            vm.login(userInfo)})
        .catch((err)=>{
            vm.logout()
        })
    }
}
</script>