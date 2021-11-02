import axios from 'axios';

export async function getHotMovie() {
    let url = 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=1617772';
    const infos = await axios({
        url,
        method: 'get',
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16311636581517338931232769"}',
            'X-Host': 'mall.film-ticket.film.list',
        }
    });
    return infos
}

export async function getFutureMovie() {
    let url = 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=2&k=2128841';
    const infos = await axios({
        url,
        method: 'get',
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16311636581517338931232769"}',
            'X-Host': 'mall.film-ticket.film.list',
        }
    });
    return infos
}