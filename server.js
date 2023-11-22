const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const fs = require('fs')
const app = express();


app.use(express.static('public'))
app.set('view engine','html')

const port = process.env.port || 3000;
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
         res.status(200).sendFile(path.join(__dirname,'index.html'))
})
app.get('/haut-parleur',(req,res)=>{
         res.status(200).sendFile(path.join(__dirname,'index.html'))
})

app.post('/submit',(req,res)=>{

         const data = req.body.textarea;
         console.log(data);

         const datajson = JSON.stringify(data,null,2);

         fs.writeFileSync('fichier.json',datajson)

         console.log('les données reçus du formulaire :' ,datajson);

         res.json("Les données enregistrées avec succès")
})
app.use((req,res)=>{
         res.status(404).redirect(path.join(__dirname,'404.html'))
})
app.listen(port,()=>{
         console.log(`Le serveur est en cours d'exécution sur http://localhost:${port}`)
})