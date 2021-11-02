import axios from 'axios';

export async function getOrder() {
    let url = 'http://localhost:6500/order';
    const infos = await axios({
        url,
        method: 'get',
    });
    return infos
}