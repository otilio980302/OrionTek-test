const express = require('express')
const router = express.Router()

 const Client = require('../models/client')

router.get('/', async (req,res)=>{
    const clients = await Client.find();
    res.render('index',{clients})
})

router.post("/add",async (req,res)=>{
    const client = new Client(req.body)
    console.log(client)
    await client.save()
    res.redirect("/")
})

router.get('/edit/:id', async(req,res)=>{
    const {id} = req.params;
    const client = await Client.findById(id);
    res.render('edit',{client})
})

router.post('/edit/:id', async(req,res)=>{
    const {id} = req.params;
    await Client.updateOne({_id:id},req.body)
    res.redirect('/')
})

router.get('/directions/:id',async (req,res)=>{
    const id = req.params.id;

    const client = await Client.findById(id)
    res.render('directions',{client})
})

router.post('/addDirection',async (req,res)=>{
    const direction = req.body.direction
    const {id} = req.body
    await Client.updateOne(
        { _id: id },
        { $push: { direction: direction } },
    )
    res.redirect('/directions/'+id)
})

router.get('/deleteDirection/$id/$direction',async (req,res)=>{
    console.log(req.params)
    await Client.updateOne(
        { _id: id },
        { $push: { direction: direction } },
    )
    res.redirect('/directions/'+id)
})



router.get('/delete/:id', async(req,res)=>{
    const id = req.params.id
     await Client.remove({_id: id})
     res.redirect("/")
})

module.exports = router