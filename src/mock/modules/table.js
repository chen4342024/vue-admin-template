import Mock from "mockjs";
import { param2Obj, successMock, getPageData, mockList } from "../util";

let list = [{
    "id": "45000020010723625X",
    "title": "Hppyiwvr gzyqobbn qxzbuvlzp dnev kbuwdll nklbiipo lidvgsia hxrvoqvo vnvqvjs upxmlvldwg kbhbs mqksna bhzfytu ktestq csnvrvrn kfeh xuuoyj.",
    "status": "draft",
    "author": "name",
    "display_time": "1982-07-08 12:12:22",
    "pageviews": 1336
}, {
    "id": "990000199704232804",
    "title": "Cngbnoocd pibhx iyxci jxpbdlbxz nfoeghm ecyqtlhhe curfk tetfsmmcz rdtxr sctxovdmb ygfnrhdjl zhwdbjcfu reft hxcf ljgvomnn fvjdhb kihf lifuvh.",
    "status": "draft",
    "author": "name",
    "display_time": "1982-08-31 15:19:06",
    "pageviews": 1846
}, {
    "id": "320000201704081298",
    "title": "Nzjhuh fslh bdxrhjl gyzkf qbdu ywhoyfs tabej ilryqwocka bmrddvihv llszxt kkdvmiqfr ffjqllzm stundub.",
    "status": "draft",
    "author": "name",
    "display_time": "1990-08-28 08:02:11",
    "pageviews": 1070
}, {
    "id": "650000198806143164",
    "title": "Aoxilbamc glmfjxkfci intjjih frqd kehvfgxgk phkk tpltuiw pdjeitrsy lmon aluds.",
    "status": "draft",
    "author": "name",
    "display_time": "2009-02-11 12:51:38",
    "pageviews": 3256
}, {
    "id": "140000201609291111",
    "title": "Jqrh iudptpr fujbno mkmlrnk pqou lqyll aenz kfdiv zxlrhtqhu blkzwdg evavb vfvleingn qsref ektrsmnli wxpqvglhw mtozw ahuubzswr pqzgegdo.",
    "status": "draft",
    "author": "name",
    "display_time": "1980-08-08 14:49:41",
    "pageviews": 2973
}];


export default {
    mock: () => {
        Mock.mock(/\/table\/list/, "get", successMock({
            "items": list
        }));
    }
};
