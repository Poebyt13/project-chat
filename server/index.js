
import mongoose from 'mongoose';
import express from 'express';
import messages from './data/message.js';
import contact from './data/contact.js'
import user from './data/user.js'
import path from 'path';
import { fileURLToPath } from 'url';
import cors from "cors";


//import users from './data/user.mjs'
//constanti

const port=process.env.PORT || 9000;
const app=express();
const connectionUrl="mongodb+srv://almuis:Milano2005@cluster0.cpxvqbc.mongodb.net/";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var myUsername='';+


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

    user.findOne({username:username}).exec()
    .then((userfind) => {
      if (userfind) {
        console.log("Utente esistente/");
        res.status(404).send()
        
      } else {
        user.create({username,password});
        console.log(username+"  "+password);
        res.status(200).send();
      }
    })
    .catch(error => {
      console.error('Errore durante la ricerca:', error);
      // Gestione degli errori
    });



  

});  


app.post("/login",(req,res)=>{
    const username=req.body.user;
    const password=req.body.password;

    user.findOne({username:username, password:password}).exec()
    .then((user) => {
      if (user) {
        console.log("Login effettuato");
        console.log(user);
        myUsername=username;
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


app.post("/create-user",(req,res)=>{
  const contact_name=req.body.user;

  user.findOne({username:contact_name}).exec()
  .then((user) => {

    //ricerca di user non trovato
    if (user === null) {
      console.log('Utente non presente');
      
      //ricerca di user col mio stesso nome
    } else if (user.username == myUsername) {
      console.log("non puoi aggiungere te stesso");

    } else if(user.username != myUsername) {
      //aggiunta contatto nel db

      //verifico se ce l'ho già come amico o no
      contact.findOne({myUsername: myUsername, contact_name}).exec()
      .then(user_contact=>{

        if (user_contact) {
          console.log("utente già come amico");

        } else {
          contact.create({myUsername,contact_name});
        
          res.status(200).send();
        }
      })
    } 

  })
  .catch(error => {
    console.error('Errore durante la ricerca:', error);
    // Gestione degli errori
  });
  
});

//per capire il mio user (il mio username con cui mi sono loggato)
app.get("/find-user",(req,res)=>{
  res.json({user:myUsername});
});

app.get("/find-contact",(req,res)=>{
  //cerco tutti i contatti che hanno l'attributo "myUsername" il nome del nostro utente
  contact.find({myUsername: myUsername}).exec()
  .then(users=>{
    res.json(users)
  })
  .catch(err=>{
    console.log("ricerca di contatti errore:" + err);
  })
})



app.post("/save-message",(req,res)=>{

});


app.post("/get-all-message",(res,req)=>{

});



app.listen(port,()=>{
    console.log(`server sta ascoltando porta : ${port}`);
    console.log(__dirname);
})




//post del login


