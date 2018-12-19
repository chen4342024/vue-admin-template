import Mock from "mockjs";

export function successMock(data) {
    const res = {
        code: 200,
        data: data,
        msg: "success"
    };
    console.log(`mock --> ${JSON.stringify(res)}`);
    return res;
}

export function param2Obj(url) {
    const search = url.split("?")[1];
    if (!search) {
        return {};
    }
    return JSON.parse(
        '{"' +
            decodeURIComponent(search)
                .replace(/"/g, '\\"')
                .replace(/&/g, '","')
                .replace(/=/g, '":"') +
            '"}'
    );
}

/**
 * 从一个数组里面筛选出对应页面的数据
 */
export function getPageData(list, { currentPage, pageSize }) {
    return list.filter(
        (item, index) =>
            index < pageSize * currentPage &&
            index >= pageSize * (currentPage - 1)
    );
}

/**
 * mock 一列数据
 */
export function mockList(count, dataSchema) {
    let list = [];
    for (let i = 0; i < count; i++) {
        list.push(Mock.mock(dataSchema));
    }
    return list;
}
