import { Router } from "express"

// create TRouterArray type
export type TRouterArr = {
    path: string,
    router: Router
}[]