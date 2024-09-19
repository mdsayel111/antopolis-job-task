import categoryRouter from "../modules/category/route";
import { TRouterArr } from "../types/router";

// array of all router path and roueter
const routers: TRouterArr = [
    {
        path: "/category",
        router: categoryRouter
    }
];

export default routers