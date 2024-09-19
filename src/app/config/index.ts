import dotenv from "dotenv"

// config dotenv
dotenv.config()

// export all env variable from this config
const config = {
    port: process.env.PORT || 5000
}

export default config