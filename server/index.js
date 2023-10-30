
import mongoose from 'mongoose';
import express from 'express';
import messages from './data/message.js';
import user from './data/user.js'
import path from 'path';
import { fileURLToPath } from 'url';
import cors from "cors";

//import users from './data/user.mjs'
//constanti

const port=process.env.PORT || 9000;
const app=express();
const connectionUrl="mongodb+srv://almumune13:f9kSi2.uSc2Fm6.@cluster0.a312rcn.mongodb.net/chatDb";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(cors());
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
    user.create({username,password});
    console.log(username+"  "+password);

});  




app.post("/login",(req,res)=>{
    const username=req.body.user;
    const password=req.body.password;

    user.findOne({username:username, password:password}).exec()
    .then((user) => {
      if (user) {
        res.status(200).send();
      } else {
        console.log('Il dato non è presente');
        // Puoi gestire il caso in cui il dato non è presente
      }
    })
    .catch(error => {
      console.error('Errore durante la ricerca:', error);
      // Gestione degli errori
    });
 
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


