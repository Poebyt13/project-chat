
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

var myUsername='';
var myFriendName = '';

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
  const myUser = req.query.myUser;
  contact.find({myUsername: myUser}).exec()
  .then(users=>{
    res.json(users)
  })
  .catch(err=>{
    console.log("ricerca di contatti errore:" + err);
  })
})

app.post("/find-friend", (req,res)=>{
  myFriendName = req.body.friend;
  res.status(200).send();
})


app.post("/save-message",(req,res)=>{
  const myUser = req.body.myUser;
  const message = req.body.message;
  const timestamp = req.body.timestamp;
  const friend = req.body.friend;

  messages.create({message, myUsername: myUser, myFriendName: friend, timestamp, by: myUsername});
  
  res.status(200).send();
});


app.get("/get-all-message",(req,res)=>{
  const myUser = req.query.myUser;
  const friend = req.query.friend;
  console.log(`name: ${myUser} + friend: ${friend}`)

  messages.find({
    $or: [
      { myUsername: myUser, myFriendName: friend, by:myUser},
      { myUsername: friend, myFriendName: myUser, by: friend}
    ]
  }).exec()
  .then(messaggi=>{
    messaggi.map((element)=>{
      if (element.by == myUser) {
        element.by = "MessaggiRight";
      } else {
        element.by = "MessaggiLeft";
      }
    })
    res.json(messaggi)
  })
  .catch(err=>{
    console.log("ricerca di messaggi error: " + err);
  })
});



app.listen(port,()=>{
    console.log(`server sta ascoltando porta : ${port}`);
    console.log(__dirname);
})




//post del login


