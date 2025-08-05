import express, { Request, Response, NextFunction, Application } from 'express';
import get_insights from './insights/get_insights';
const app = express();
require('dotenv').config();
const API_KEY = process.env.API_KEY 

app.use(express.json())
app.get('/getinsights',async (req:Request,res:Response) => {
    const is_ai = req.query.ai;
    const url = req.query.url;
    if(is_ai === "true"){
        console.log("get ai input");
    }
    else{
        console.log(await get_insights(url))
    }
    async function callapi(url:string) {
        const URL_TO_CHECK = url.toString();
        
        const call = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${URL_TO_CHECK}&key=${API_KEY}`)
    }
    res.send()
    
})

app.listen(3000,() => console.log("server running on 3000"))