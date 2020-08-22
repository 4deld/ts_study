import * as mongoose from 'mongoose';

import { IWOP, IWOPModel } from './domain/iwop'
import { DB } from './domain/db';


let uri = 'mongodb://localhost/club';
const connection: mongoose.MongooseThenable = mongoose.connect(uri);

const db = new DB();

let park = <IWOP>{name :'park',grade:3,isMale:true}

connection.then(()=>{
  return db.create(park)
})
.then((raw:IWOP) => {
    db.read({name: raw.name}).then((iwops) => { 
        console.log('Created');
        console.log(iwops);
    });
})
.then(()=>{
  park.grade=0
  return db.update(park)
})
.then(()=>{
  db.read({name:'park'}).then((iwops)=>{
    console.log('Updated')
    console.log(iwops)
  })
})
.then(()=>{
  return db.delete(park)
})
.then(()=>{
  db.read({name:'park'}).then((iwops)=>{
    console.log('Deleted')
    console.log(iwops)
  })
})
.then(()=>{
  mongoose.connection.close()
})