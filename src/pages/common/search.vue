<template>
<div class="page1 subpage" id="search">
    
        <app-header title="猫眼电影">
             <span class="header-btn header-btn-left" slot="left" @click="backAction()">
               <i class="iconfont icon-zuo1"></i>
            </span>
        </app-header>

        <div class="search-header">
            <div class="input-wrapper">
            <img src="//s0.meituan.net/bs/?f=my-canary:/deploy/images/search.png" alt="" class="search-icon">
            <input type="text" class="search-input" placeholder="搜电影，搜影院" v-model="kw" >

            </div>
            <div class="cancel">取消</div>
        </div>
<ul>
        <div class="movie-list"  v-for="item in searchMovie" :key="item.id">
             <div class="movie cell">
              <div class="item-img"><img :src="item.img" alt=""></div>
            <div class="movie-name">{{item.nm}}</div>
            </div>
        </div>
       
</ul>
 <h3>影院</h3>
        <div class="cinema-list" v-for="(lists , index) in  searchCiname" :key="index">     
                {{lists.nm}}
        </div>
</div>

</template>

<script>

import {getSearchCinemas , getSearchMovie} from '../../services/appService'
export default {
    data(){
            return{
                placeResule:[],
                cinemaList:[],
                kw:'',
                searchMovie:[],
                searchCiname:[]
            }
    },

    created(){
        this.$watch('kw',(newval,oldval)=>{
            console.log(this.kw)
            getSearchCinemas(this.kw ,newval).then(result=>{
                this.searchCiname = result;
            })
            getSearchMovie(this.kw, newval).then(resule=>{
                this.searchMovie = resule;
            })
        })
    },
methods:{
    backAction(){
       this.$router.back() 
    },
}

}
</script>

<style lang="scss" scoped>
#search{
  background: #f5f5f5;
    .search-header{
    margin-top: 50px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 8px 0 8px 10px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e5e5e5;
    z-index: 1;
    .input-wrapper{
    padding: 0 10px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    background-color: #fff;
    -webkit-box-flex: 1;
    flex-grow: 1;
    .search-icon{
        width: 15px;
        height: 15px;
        margin-right: 6px;
        float: left;
        position: relative;
        top: 6px;
            }
    .search-input{
        -webkit-box-flex: 1;
    flex: 1;
    border: none;
    font-size: 13px;
    color: #333;
    line-height: 20px;
    padding: 4px 0;
    width: calc(100% - 40px);
    }
   
    }
     .cancel{
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    font-size: 16px;
    color: #f03d37;

    }
    }
    ul{
    padding: 12px 0;
    min-height: 90px;
    height: 360px;
    overflow: hidden; 
        .movie-list{
        padding-left: 15px;
        border-top: 1px solid #e6e6e6;
        }
      .item-img{
          width: 120px;
          height: 191px;
      }  
    .movie-name{
            margin-right: 15px;
    margin-top: 1px;
    }
    }
}


</style>