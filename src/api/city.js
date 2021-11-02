// 主页相关的api请求
import request from './request.js';

/* api 请求后台后，后台会获取到浏览器所处的ip地址，然后基于ip地址再进行定位，计算
出用户的所处位置的信息和经纬度的信息 */
export async function getUserLocation() {
    let url = '/v1/cities?type=guess';
    let res = await request.get(url);
    return res.data;
}

export async function getHotCity() {
    let url = '/v1/cities?type=hot';
    let res = await request.get(url);
    return res.data;
}

export async function getAllCity() {
    let url = '/v1/cities?type=group';
    let res = await request.get(url);
    return res.data;
}

