const express=require("express");

const router=express();


const{getall,create,getbyid,update,Remove}=require('../Controllers/DetailsControllers');

router.get('/getall',getall)
router.post('/create',create)
router.get('/getbyid',getbyid)
router.post('/update/:id',update)
router.post('/remove/:id',Remove)

module.exports=router