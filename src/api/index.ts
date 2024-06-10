// import { getBaseUrl,get,post,deletes } from "@/api/request";
import { getBaseUrl,get,post,deletes } from "./request";

const HttpManager = {
    // 登录
    signIn: ({ username, password }: { username: string, password: string }) => post(`user/login/status`, { username, password }),
    // 轮播图
    attachImageUrl: (url: string) => url ? `${getBaseUrl()}/${url}` : "https://cdn.pixabay.com/photo/2017/03/27/13/06/man-2178598__340.jpg",
    // 海报
    getBannerList:() => get("banner/getAllBanner")
}

export { HttpManager };