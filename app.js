const express =require('express');
const router = express.Router();

router.use('/api',require('./Routes/Routes'));
router.use('/details',require('./Routes/DetailsRouter'))

module.exports=router;
