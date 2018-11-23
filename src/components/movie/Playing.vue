
<template>
<app-content :style="{top: '88px', bottom: '49px'}" @loadmore="loadMoreData" :canLoadMore="canLoadMore">
<ul class="playing">
    <li class="playing-item" v-for="(item,index) in playingList" :key="index"  @click="buy(item.id,item.nm)" >
        <div class="item-img">
            <img :src="item.img"/>
        </div>
        <div class="item-content">
            <span>{{item.nm}}</span>
            <div class="detail column" >
                <span>
                    <p>观众评分  &nbsp;</p> <h4>  {{item.sc}} </h4> 
                </span>
              <div class="actor">主演：{{item.star}}</div>
              <div class="show-info">{{item.showInfo}}</div>
              <div class="button-block">
                <div class="btn normal">
                    <span v-if="item.globalReleased == true" :style="{background:'red'}" >{{btn[0]}}</span>
                    <span v-else-if="item.globalReleased == false" :style="{background:'blue'}">{{btn[1]}}</span>
                </div>

            </div>
            </div>
            
        </div>

    </li>
</ul>
</app-content>
</template>

<script>
import {getPlayingList, getMorePlayingList} from '../../services/movieService'
import index from '../../api';

export default {
    data(){
        return {
            playingList: [],
            playingIDS: [],
            canLoadMore: true,
            btn:['购买','预售']
        }
    },
    methods: {
        //加载更多数据
         loadMoreData(){
            //取出ids
            let ids = [...this.playingIDS];
            ids = ids.splice(this.playingList.length, 10);
            //组装ids
            let movieIds = ids.join(',');
            // 发送请求
            this.canLoadMore = false;
            getMorePlayingList(movieIds).then(result=>{
                console.log(result);
                this.playingList = [...this.playingList, ...result];
                //判断是否可以继续加载更多
                if(this.playingList.length >= this.playingIDS.length){
                    //加载完毕
                    this.canLoadMore = false;
                }else{
                    //还可以继续加载
                    this.canLoadMore = true;
                }
            })
        },
        buy(id,name){
             this.$router.push({
                 name:'buy-list',
                 params:{
                     id,
                    name
                 }
             });
            // this.$center.$emit('tobuy',(id,name));
            //  console.log(newlist)
        }
    },
    created(){
        //初始化请求数据
        getPlayingList().then(({data, ids})=>{
            this.playingList = data;
            this.playingIDS = ids;
        })


    }
}
</script>

<style lang="scss" scoped>
.playing-item{
    display: flex;
    padding: 10px;
    .item-img{
        width: 64px;
        img{
            width: 100%;
        }
    }
    .item-img{
    width: 64px;
    height: 90px;
    position: relative;
    float: left;
    img{
            width: 100%;
        }
    }
    .item-content{
        flex: 1;
        margin-left: 5px;
        padding-right: 5px;
        margin-right: 48px;
        font-size: 13px;
        color: #666;
        border-bottom: 1px solid #e6e6e6;
    span{
    font-size: 17px;
    color: #333;
    font-weight: 700;
    padding-right: 5px;
    flex-shrink: 1;
    padding: 10px;
    }
    .column{
        position: relative;
            box-sizing: border-box;
            line-height: 1;
                margin-top: 7px;
             p{
                 float: left;
                font-size: 13px;
                color: #666;
            }
            h4{
                float: left;
                font-weight: 700;
                color: #faaf00;
                font-size: 15px;
            }
             .actor{
       height: 13px;
       margin-top: 2px;
       width: 198px;
    white-space: normal;
        overflow: hidden;
       text-overflow: ellipsis;
   }
.button-block{
    font-size: 12px;
    position: absolute;
    right: -50px;
    top: 0;
    bottom: 0;
    height: 27px;
 
    .btn{
    width: 47px;
    height: 27px;
    line-height: 28px;
    text-align: center;
    box-sizing: border-box;
    // background-color: #f03d37;
    color: #fff;
    border-radius: 4px;
    white-space: nowrap;
    font-size: 12px;
    cursor: pointer;
    span{
            width: 47px;
    height: 27px;
    line-height: 28px;
    text-align: center;
    box-sizing: border-box;
    background-color: #f03d37;
    color: #fff;
    border-radius: 4px;
    white-space: nowrap;
    font-size: 12px;
    cursor: pointer;
    }
    }

    }
    }
    }
    

}
</style>

