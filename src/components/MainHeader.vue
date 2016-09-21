<template>
    <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css">
    <navbar placement="top" type="default">
        <!-- Brand as slot -->
        <a slot="brand" href="/" title="Home" class="navbar-brand">VueDemo</a>
        <!-- You can use dropdown component -->
        <dropdown text="Dropdown">
            <li><a href="link">Option</a></li>
        </dropdown>
        <!-- For right positioning use slot -->

        <dropdown slot="right" v-if="getUser" :text="getUser.name">
            <li><a @click="logout">登出</a></li>
        </dropdown>
        <li v-if="!getUser" slot="right">
            <a @click="showLoginModal">登录</a>
        </li>
    </navbar>
    <login-modal></login-modal>
</template>

<script>
import { dropdown,navbar }  from 'vue-strap'
import { getUser } from '../vuex/getters'
import { showLoginModal,logout } from '../vuex/actions'
import LoginModal from './LoginModal'

export default { 
    vuex: {
        getters: {
            getUser
        },
        actions:{
            showLoginModal,
            logout
        }
    },
    components:{
        navbar,
        dropdown,
        LoginModal
    } 
}
</script>