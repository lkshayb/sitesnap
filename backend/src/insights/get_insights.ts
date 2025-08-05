const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;
function get_insights(url:any){
    const URL_TO_CHECK = url.trim();
    axios.get(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${URL_TO_CHECK}&key=${API_KEY}`)
        .then((e:any) => {
            return e
        })
}

export default get_insights