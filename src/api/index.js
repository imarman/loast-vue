import request from '../utils/request';

export function getIndex() {
    return request({
        url: "https://www.baidu.com",
        method: "get",
    });
}