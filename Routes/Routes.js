const express=require("express");//importing express

const router=express();//assigned to router

const {getall,create,getbyid,update}=require('../Controllers/Controler'); //impoting controllers

router.get('/getall',getall); //get or post function 
router.post('/create',create) //
router.get('/getbyid',getbyid);
router.post('/update/:id',update) //

module.exports=router; //exporting
