import API from '../api'
import http from '../utils/http'
import api from '../api';

export function getCityListData(){
    return new Promise((resolve, reject)=>{
        http({
            url: API.CITY_API,
            method: 'GET'
        })
        .then(({data, status})=>{
            if(status != 200){
                //请求失败
            }else{
                //请求成功
                // 取得首字母，按字母先分类
                // console.log(data);
                let map = {};
               
                data.cts.map(item=>{
                    let letter = item.py[0];
                    if(!map[letter]){
                        map[letter] = [];
                    }
                    map[letter].push(item);
                })
                let keys = Object.keys(map);
                //排序
                // 选择排序
                for(let i = 0; i < keys.length; i++){
                    for(let j = i+1; j < keys.length; j++){
                        if(keys[i] > keys[j]){
                            let tmp = keys[i];
                            keys[i] = keys[j];
                            keys[j] = tmp;
                        }
                    }
                }
                //组装数据
                let newData = keys.map(item=>{
                    return {
                        key: item, 
                        value: map[item]
                    }
                })
                resolve({
                    keys: keys,
                    data: newData
                });
            }
        })
        .catch(error=>{
            //请求失败
        })
    })
}

//搜索页面请求
export function getSearchMovie(kw){
        return new Promise((resolve, reject)=>{
            http({
                url: API.SEARCH_API,
                method: 'GET',
                data: {
                    kw,
                    cityId:'30',
                    stype:'-1',
                }
            })
            .then(({data, status})=>{
                if(status != 200){
                    return;
                }
                console.log(data);
                let newData1 = data.movies.list.map(item=>{
                    let {cat,dir,dur,id,img,nm,star,rt}=item;
                    img = img.replace(/w.h/, '128.180');
                    return {cat,dir,dur,id,img,nm,star,rt}
                })

                resolve(newData1);
            })
            .catch(error=>{
                //请求失败
            })
        })
    }
//影院
    export function getSearchCinemas(kw){
        return new Promise((resolve, reject)=>{
            http({
                url: API.SEARCH_API,
                method: 'GET',
                data: {
                    kw,
                    cityId:'30',
                    stype:'-1',
                }
            })
            .then(({data, status})=>{
                if(status != 200){
                    return;
                }
                console.log(data);
                let newData2 = data.cinemas.list.map(item=>{
                    let {addr,distance,sellPrice,sell,nm,id}= item;
                    return {addr,distance,sellPrice,sell,nm,id}
                })
                resolve(newData2);
            })
            .catch(error=>{
                //请求失败
            })
        })
    }

    //详情页
    export function getMovieDetail(movieId){
        return new Promise((resolve, reject)=>{
            http({
                url: API.DEATILMOVIE_API,
                method: 'GET',
                data: {
                    movieId
                }
            })
            .then(({data, status})=>{
                if(status != 200){
                    return;
                }

                resolve(data.detailMovie);
            })
            .catch(error=>{
                //请求失败
            })
        })
    }
//详情页影院
export function getCinemeaDetail(movieId){
    return new Promise((resolve, reject)=>{
        http({
            url: API.FILTERCINEMAS_API,
            method: 'get',
            data: {
                movieId,
                day:'2018-11-23',
            }
        })
        .then(({data, status})=>{
            if(status != 200){
                return;
            }
            // let newData =data.map(item=>{
            //     let {brand,district,hallType,service,subway,timeRanges}=item;
            //     return {brand,district,hallType,service,subway,timeRanges} 
            // })
            // console.log(newData)
            resolve(data.brand);
        })
        .catch(error=>{
            //请求失败
        })
    })
}
