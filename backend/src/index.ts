import express, { Request, Response, NextFunction, Application } from 'express';
const app = express();
require('dotenv').config();
const API_KEY = process.env.API_KEY 

app.use(express.json())
app.get('/getinsights',async (req:Request,res:Response) => {
    async function callapi(url:string) {
        const URL_TO_CHECK = url.toString();
        console.log(URL_TO_CHECK)
        console.log(API_KEY)
        const call = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${URL_TO_CHECK}&key=${API_KEY}`)
    }
    res.send(await callapi(req.body.url))
    
})

app.listen(3000,() => console.log("server running on 3000"))