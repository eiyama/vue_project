<template>
<div class="page subpage" id="login">
    
    <app-header title="登录">
        <span slot="left" @click="backAction()">返回</span>
         <!-- <span slot="right" @click="backAction()"></span> -->
    </app-header>
    <app-content :style="{top: '44px', bottom: 0}">
        <p>
            <input type="text" placeholder="用户名" ref="user">
        </p>
        <p>
            <input type="text" placeholder="密码" ref="psd">
        </p>
        <p>
            <span @click="loginAction">确定</span>
        </p>
    </app-content>
</div>
</template>

<script>
export default {
    methods: {
        backAction(){
            this.$router.back();
        },
        loginAction(){
            console.log(this.$refs.user.value);
            console.log(this.$refs.psd.value);
            //发送ajax请求
            // 将登录成功的结果保存起来
            localStorage.setItem('token', 'afsdjasdfhaos');
            //成功
            this.$router.push('/mine');
        }
    }
}
</script>
<style lang="scss" scoped>
#login{
    background: #eee;

}
</style>

