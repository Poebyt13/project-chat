
import mongoose from 'mongoose';
import express from 'express';
import messages from './data/message.js';
import user from './data/user.js'
import path from 'path';
import { fileURLToPath } from 'url';


//import users from './data/user.mjs'
//constanti
const port=process.env.PORT || 9000;
const app=express();
const connectionUrl="mongodb+srv://almumune13:f9kSi2.uSc2Fm6.@cluster0.a312rcn.mongodb.net/chatDb";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



app.use(express.json());
app.use(express.urlencoded({extended:true}));
//connnessione database cluod
mongoose.connect(connectionUrl);

const db=mongoose.connection;

db.on('error', (err) => {
    console.error('Errore di connessione al database:', err);
  });


  
db.once('open', () => {
    console.log('Connessione al database avvenuta con successo!');
});
//fine connnessione database cluod




app.post("/sign",(req,res)=>{
    const username=req.body.user;
    const password=req.body.password;
    
    user.create({user,password});
    
    console.log(user+"  "+password);

});  




app.post("/login",(req,res)=>{
    const username=req.body.user;
    const password=req.body.password;

    user.find({username,password});

 /*   const message=req.body;
    messages.create(message,(err,data)=>{
        if(err){
            res.statusCode(500).send(err);
        }
        else{
            console.log("DATO RICEVUTO")
        }

    });*/

}); 

app.listen(port,()=>{
    console.log(`server sta ascoltando porta : ${port}`);
    console.log(__dirname);
})




//post del login


