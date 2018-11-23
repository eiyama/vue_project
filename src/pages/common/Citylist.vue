<template>
<div id="city-list" class="page subpage">
    <app-content :style="{top: 0, bottom: 0}" ref="content">
        <div v-for="cityMap in data" :key="cityMap.key" ref="list">
            <h6 :style="{background: 'yellow'}">{{cityMap.key}}</h6>
            <ul>
                <li v-for="item in cityMap.value" :key="item.id"
                    @click="selectCityAction(item)">
                    {{item.nm}}
                </li>
            </ul>
        </div>

    </app-content>
    <nav class="nav-bar">
        <li class="nav-item" v-for="(item, index) in keys" :key="item" @click="btnAction(index)">
            {{item}}
        </li>
    </nav>
</div>


</template>

<script>
import {getCityListData} from '../../services/appService'
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            data: [],
            keys: []
        }
    },
    methods: {
        ...mapActions(['selectCity']),
        btnAction(index){
            //跳转到指定的字母的城市列表中
            //计算需要滚动的高度
            let height = 0;
            for(let i = 0; i < index; i++){
                height += this.$refs.list[i].offsetHeight;
            }     
            //让滚动视图滚动
            this.$refs.content.scrollTo(height);
        },
        selectCityAction(item){
            //将选中的城市保存，保存到全局数据中
            this.selectCity({
                city: item.nm,
                id: item.id
            })
            // 返回上一页
            this.$router.back();
        }
    },
    created(){
        // 去本地存储数据，如果没有就请求，如果有就直接使用
        getCityListData().then(({data, keys})=>{
            // 本地存储数据，以便下次使用
            this.data = data;
            this.keys = keys;
        })
    }
}
</script>

<style lang="scss" scoped>
#city-list{
     width: 100%;
    height: 100%;
    position: fixed;
    left:0;
    bottom: 0;
    z-index: 6;
    background: #ebebeb;
}
.nav-bar{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    .nav-item{
        font-size: 14px;
        padding: 0 6px;
    }
}
</style>

