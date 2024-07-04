const express =require('express');
const router = express.Router();

router.use('/api',require('./Routes/Routes'));

module.exports=router;
