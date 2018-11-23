import API from '../api'
import http from '../utils/http'




export function getCinemaList(cityId){
    return new Promise((resolve, reject)=>{
        http({
            url: API.CINEMALIST_API,
            method: 'GET',
            data:{
                cityId
            }
        })
        .then(({data, status})=>{
            if(status != 200){
                //请求失败
            }else{
     
            }  
            //过滤
            let newData = data.cinemas.map(item=>{
                let {addr,distance,id,mark,nm} = item;
                // img = img.replace(/w.h/, '128.180');
                // return {addr,distance,id,mark,nm};
                return item;
            })
            resolve(newData);
        })
        .catch(error=>{
            //请求失败
        })
    })
}

export function getCinemaDetails(ci){
    return new Promise((resolve, reject)=>{
        http({
            url: API.FILTER_API,
            method: 'GET',
            data:{
                ci
            }
        })
        .then(({data, status})=>{
            if(status != 200){
                //请求失败，提醒用户
                return;
            }
            // console.log(data)
            // resolve(data.brand.subItems)
            resolve ({
                brand:data.brand.subItems,
                district:data.district.subItems,
                hallType:data.hallType.subItems,
                service:data.service.subItems,
                subway:data.subway.subItems,
                timeRanges:data.timeRanges.subItems
            });
           
        })
        .catch(error=>{
            // console.log(aaa)
            //请求失败
        })
    })
}