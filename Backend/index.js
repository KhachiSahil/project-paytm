const express = require('express');
const router = require('./routes/index.js');
const cors = require('cors');
const route = express.Router();
const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/v1',router);

app.listen(3000, (req,res)=>{
    console.log('Server has started on port 3000');
})  