"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
require('dotenv').config();
const API_KEY = process.env.API_KEY;
app.use(express_1.default.json());
app.get('/getinsights', async (req, res) => {
    async function callapi(url) {
        const URL_TO_CHECK = url.toString();
        console.log(URL_TO_CHECK);
        console.log(API_KEY);
        const call = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${URL_TO_CHECK}&key=${API_KEY}`);
    }
    res.send(await callapi(req.body.url));
});
app.listen(3000, () => console.log("server running on 3000"));
//# sourceMappingURL=index.js.map