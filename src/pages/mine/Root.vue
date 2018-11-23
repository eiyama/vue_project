<template>
<div class="page" id="mine">
     <app-header title="猫眼电影">
        <span slot="right" @click="outlogin()">退出</span>

     </app-header>
    <app-content>
     <nav class="nav">
                <li v-for="(navItem, index) in navList" :key="navItem"
                    :class="{active: navIndex==index}" @click="navAction(index)">
                    {{navItem}}
                </li>
            </nav>
    </app-content>
        

</div>
</template>

<script>
export default {
 data(){
        return {
            navList: ['美团账号登录', '手机验证登录'],
            navIndex: 0
        }
    },

    methods: {
        navAction(index){
            this.navIndex = index;
        },
        outlogin(){
            console.log(localStorage)
            localStorage.removeItem('token')
        }
    }
}
</script>

<style lang="scss">
    .nav{
        width: 60%;
        display: flex;
        li{
            flex: 1;
            text-align: center;
            line-height: 44px;
            font-weight: bold;
            &.active{
                color: #f03d37;
                border-bottom: 2px solid #f03d37;
            }
        }
    }
</style>
