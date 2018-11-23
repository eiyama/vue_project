<template>
<div class="page" id="cinema">

   <app-header title="影院"></app-header>
        <!-- 子头部 -->
        <header class="sub-header">
             <span class="city-icon" @click="goCityList()" ref="cityChange">
                {{city}}
            </span>
            <router-link class="search-header" to="/cinema/search" >
            <img src="//s0.meituan.net/bs/?f=my-canary:/deploy/images/search.png" alt="" class="search-icon">
            <span>搜影院</span>
        </router-link>
        </header>
        <nav class="nav-wrap filter-nav-wrap">
            <div class="item" v-for="(item ,index) in navlist" :key="item" @click="getDetail(index)">   
                {{item}}  
            </div>
            <div class="close-tab" v-if="isshow">


            </div>
        </nav>
        <app-content class="ciname">
        <!-- <div> -->
        <div class="list-wrap" v-for="(item,index) in cinemaList" :key="index">
           <span><h3>{{item.nm}}</h3><p> {{item.sellPrice}}元起</p></span>
            <div class="location-block">{{item.addr }}</div>
        </div>

        </app-content>

    </div>
</template>

<script>
import {mapState} from 'vuex'
import {getCinemaList,getCinemaDetails} from '../../services/cinemaService'


export default {
data(){
        return{
            navlist:['全城','品牌','特色'],
            cinemaList:[],
            cinemaDetails:{},
            comingMap: {},
            isshow:false
        }
},
 computed: {
        ...mapState(['city','cityID']), 
    },
methods:{
 goCityList(){
            this.$router.push('/movie/city-list');
        },

    getDetail(index){
        if(index==0){
            console.log(this.cinemaDetails)
        // this.cinemaDetails

        }
        else if(index==1){
            console.log(1)
        }
        else if(index==2){
            console.log(2)
        }
    },
},

created(){
 getCinemaList(this.cityID).then((data)=>{
            this.cinemaList = data;
        });
    getCinemaDetails(this.cityID).then((data)=>{ 

            this.cinemaDetails.brand=data.brand,      
            this.cinemaDetails.district=data.district,
             this.cinemaDetails.hallType=data.hallType,
             this.cinemaDetails.service=data.service,
            this.cinemaDetails.subway=data.subway,
             this.cinemaDetails.timeRanges=data.timeRanges

             })

    
},

}
</script>

<style lang="scss" scoped>

.sub-header{
    width: 100%;
    height: 44px;
    border-bottom: 1px solid #e6e6e6;
    position: absolute;
    left: 0;
    top: 44px;
    color: #666;
    font-size: 14px;
    display: flex;
    padding-left: 15px;
    font-size: 15px;
    // color: #666;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;

    .city-icon{
        padding: 5px;
        flex: 1;
        width: 62px;
        line-height: 44px;
        &::after{
            content: '';
            display: inline-block;
            width: 0;
            height: 0;
            border: 6px solid transparent;
            border-top: 6px solid #666;
            transform: translateY(4px);
        }
    }
}
 .search-header{
display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 220px;
    height: 28px;
    font-size: 13px;
    color: #b2b2b2;
    margin-left: 18px;
    border: .5px solid #e6e6e6;
    border-radius: 5px;
    margin-right: 15px;
    .search-icon{
        width: 14px;
    height: 14px;
    margin-left: 3px;
    margin-right: 4px;
    }
  }
  .nav-wrap{
       position: relative;
      top: 90px;
          width: 100%;
    height: 40px;
    z-index: 10;
    background-color: #fff;
    display: flex;
    .item{
            flex: 1;
    text-align: center;
    line-height: 40px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    font-size: 13px;
    text-overflow: ellipsis;
    }
    .close-tab{
        position: relative;
    width: 100%;
    background: #fff;
    z-index: 100;
    overflow: scroll;
    display: none;
    }

  }
.ciname{
    top: 120px;
    bottom: 49px;


     .list-wrap{
        //  height: 40px;
            padding: 13px 15px 13px 0;
    margin-left: 15px;
    background-color: #fff;
    position: relative;
    overflow: hidden;
    // span{
    //     h3{

    //     }
    // }
    .location-block{
            margin-top: 6px;
    font-size: 13px;
    color: #666;
        text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    }
      
      
      }
}

</style>
