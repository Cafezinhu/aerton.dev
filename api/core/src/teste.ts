import { API, RegisterOptions } from "lambda-api";

module.exports = (api: API, opts: RegisterOptions) => {
    api.get("/", async (req, res) => {
        res.status(200).json({result: 42})
    })
}