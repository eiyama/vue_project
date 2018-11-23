<template>
  <div id="app">

    <!-- <keep-alive> -->
      <router-view/>
    <!-- </keep-alive> -->

    <tabs v-model="selectIndex">
      <tab-item v-for="(tabItem, index) in tabList" :key="index"
        :name="tabItem.name" :icon="tabItem.icon">
      </tab-item>
    </tabs>
    
  </div>
</template>
<script>
export default {
  data(){
    return {
      tabList: [
        {name: '电影', icon: 'iconfont icon-dianying', path: '/movie'},
        {name: '影院', icon: 'iconfont icon-yingyuana', path: '/cinema'},
        {name: '我的', icon: 'iconfont icon-wode', path: '/mine'}
      ],
      selectIndex: 0
    }
  },
  watch: {
    selectIndex(newVal){
      let path = this.tabList[newVal].path;
      this.$router.push(path);
    }
  }
}
</script>


<style lang="scss">
.page1{
    background: #fff;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 49px;
}
.page1.subpage{
    bottom: 0;
    z-index: 5;
}
</style>
