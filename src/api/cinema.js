import axios from 'axios';

export async function getCinema() {
    let url = 'http://localhost:6500/cinema';
    const infos = await axios({
        url,
        method: 'get',
    });
    return infos
}