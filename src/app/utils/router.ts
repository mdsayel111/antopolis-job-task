import { Router } from "express";
import { TRouterArr } from "../types/router";

// create add router fun for add routers in another router
export const addRouters = (router: Router, routers: TRouterArr) => {
    // add all routers in router
    routers.map((childRouter) => router.use(childRouter.path, childRouter.router));
}