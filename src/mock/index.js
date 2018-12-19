import Mock from "mockjs";
import userMock from "./modules/user";
import tableMock from "./modules/table";

userMock.mock();
tableMock.mock();

export default Mock;
