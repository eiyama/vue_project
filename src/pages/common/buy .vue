<template>
<div class="page1 subpage" id="buy">
    
    <app-header title="猫眼电影">
        <span slot="left" @click="backAction">返回</span>
    </app-header>
    <app-content :style="{top: '44px', bottom: '49px'}">
     <div class="detail box-flex" >
         <img :src="movielist.img" alt="" v-if="(movielist!=null)">
     </div>
    <div >

    </div>


    </app-content>
</div>
</template>

<script>
import {getMovieDetail,getCinemeaDetail} from '../../services/appService';
export default {
    data(){
        return{
            movieId:this.$route.params.id,
            moviename:this.$route.params.name,
            movielist:[],
            cinemaDetail:[]
        }
    },
    created(){
        getMovieDetail(this.movieId).then(resule=>{
            // console.log(resule)
            resule.img=resule.img.replace(/w.h/, '128.180');
                this.movielist = resule;
            })

          getCinemeaDetail(this.movieId)
          
    },
   methods:{
       backAction(){
            this.$router.back();
       }
   },
   destroy(){
    
   }
}
</script>
<style lang="scss" scoped>
#buy{
   background: #f5f5f5;
}
.detail{
    height: 150px;
    padding: 19px 30px 19px 15px;
}
</style>

