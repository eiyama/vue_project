<template>


<app-content :style="{top: '88px', bottom: '49px'}">
<div class="coming">
    <div class="expected">
        <p>最受期待的电影：</p>
        <h-scroll class="expected-list">
            <li  class="expected-item" v-for="item in expectedList" :key="item.id"> 
                <img :src="item.img | replaceWH(85, 115)"/>
            </li>
        </h-scroll>
    </div>

    <div v-for="(list, key) in comingMap" :key="key">
        <p>{{key}}</p>
        <ul class="coming">
            <li v-for="item in list" :key="item.id" class="coming-item">
         <div class="item-img">
            <img :src="item.img"/>
        </div>
        <div class="item-content">
            <span>{{item.nm}}</span>
            <div class="detail column">
              <div class="actor line-ellipsis">主演：{{item.star}}</div>
              <div class="show-info">{{item.showInfo}}</div>
              <div class="button-block">
                <div class="btn normal">
                    <span v-if="item.globalReleased == true" :style="{background:'red'}">{{btn[1]}}</span>
                    <span v-else-if="item.globalReleased == false" :style="{background:'blue'}">{{btn[1]}}</span>
                </div>

            </div>
            </div>
            
        </div>
            </li>
        </ul>
    </div>

</div>
</app-content>


</template>

<script>

import '../../utils/filter'
import {getComingList, getMostExpectedData} from '../../services/movieService'
import {mapState} from 'vuex'
export default {
    data(){
        return {
            comingMap: {},
            expectedList: [],
             btn:['想看','预售']
        }
    },
    computed: {
        ...mapState(['cityID'])
    },
    watch: {
        cityID(){
            // console.log('id变化了');
            this.initData();
        }
    },
    methods: {
        initData(){
            getComingList(this.cityID).then(result=>{
            this.comingMap = result;
        })

        getMostExpectedData(this.cityID).then(result=>{
            this.expectedList = result;
        })
        }
    },
    created(){
        this.initData();
    }
}
</script>

<style lang="scss" scoped>

.expected{
    padding: 10px 15px;
        .expected-item{
                display: inline-block;
                width: 85px;
                height: 115px;
                overflow: hidden;
                img{
                    width: 100%;
                }
            }
            }
    .coming{
        padding-left: 15px;
        background-color: #fff;
            .coming-item{
            padding: 12px 14px 12px 0;
            height: 90px;
            max-height: 90px;
            position: relative;
            
        .item-img{
        width: 64px;
        height: 90px;
        position: relative;
        float: left;
            border-bottom: 1px solid #e6e6e6;
        img{
        width:100%
            }
        }
    .item-content{
        // float: left;
        flex: 1;
        margin-left: 71px;
        padding-right: 5px;
        margin-right: 48px;
        font-size: 13px;
        color: #666;
    
        height: 
    span{
            font-size: 17px;
            color: #333;
            font-weight: 700;
            padding-right: 5px;
            flex-shrink: 1;
            
             width: 183px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
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
    right: -20px;
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
    // background-color: #f03d37;
    color: #fff;
    padding: 8px;
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
}
</style>