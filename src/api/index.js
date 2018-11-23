//开发环境
const SAT_HOST = 'http://localhost:8080';
//测试
const UAT_HOST = 'http://10.213.12.98:8080';
//生产
const PRO_HOST = 'https://m.maoyan.com';


/*
正在热映的接口
参数： token 用户标识
*/
const PLAYING_API = '/ajax/movieOnInfoList';

/*
更多正在热映数据的接口
参数：
    token 用户标识
    movieIds  请求的电影id
*/
const MORE_PLAYING_API = '/ajax/moreComingList';

/*
最受期待的电影数据接口
参数：ci 城市id
     limit   数据长度
     offset   数据偏移量
     token  用户标识
*/
const MOST_EXPECTED_API = '/ajax/mostExpected';



/*
即将上映的接口
参数： ci   城市id
      token   用户标识
      limit   数据长度
*/
const COMING_API = '/ajax/comingList';
const FILTER_API = '/ajax/filterCinemas';


const SEARCH_API='/ajax/search';


//城市

const CITY_API='dianying/cities.json';


/* 影院接口*/
const CINEMALIST_API='/ajax/cinemaList';

//详情页
const DEATILMOVIE_API='/ajax/detailmovie'

//影院
const FILTERCINEMAS_API='/ajax/filterCinemas'


export default {
    SAT_HOST,
    UAT_HOST,
    PRO_HOST,
    PLAYING_API,
    MORE_PLAYING_API,
    MOST_EXPECTED_API,
    COMING_API,
    CITY_API,
    FILTER_API,
    CINEMALIST_API,
    SEARCH_API,
    DEATILMOVIE_API,
    FILTERCINEMAS_API,
}


