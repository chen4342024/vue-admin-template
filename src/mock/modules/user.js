import Mock from "mockjs";
import { param2Obj, successMock, getPageData, mockList } from "../util";

const totalList = mockList(100, {
    addressId: 0,
    addressStr: "string",
    age: 0,
    beginTime: "2018-11-12T03:09:54.420Z",
    commentNum: 0,
    content: "string",
    createdTime: "@datetime",
    endTime: "@datetime",
    headImg: "string",
    images: "string",
    imagesList: ["string"],
    likeNum: 0,
    liked: false,
    location: "string",
    nickname: "@first",
    sex: 0,
    shareNum: 0,
    signature: "string",
    status: 0,
    topicId: 0,
    userId: "@increment"
});

export function getList(config) {
    console.log("getList");
    const { currentPage = 1, pageSize = 20 } = param2Obj(config.url);
    const pageList = getPageData(totalList, { currentPage, pageSize });
    return successMock(pageList);
}

// function getData() {
//     const { id } = param2Obj(config.url)
//     console.log(id)
//     const target = totalList.find(item => item.id === id)
//     return successMock(target)
// }

export function getUserInfo() {
    return successMock({ "roles": ["admin"], "name": "admin", "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif" });
}


export default {
    mock: () => {
        Mock.mock(/\/user\/login/, "post", successMock({
            "token": "admin"
        }));
        Mock.mock(/\/user\/info/, "get", getUserInfo);
    }
};
