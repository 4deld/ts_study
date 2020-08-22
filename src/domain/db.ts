import * as mongoose from 'mongoose'

import {IWOP, IWOPModel } from './iwop'

export class DB{
    constructor(){}

    create(iwop: IWOP): Promise<IWOP>{
        let p = new IWOPModel(iwop)
        return p.save()
    }

    read(query: any):mongoose.DocumentQuery<IWOP[], IWOP>{
        return IWOPModel.find(query)
    }

    update(iwop: IWOP):mongoose.Query<number>{
        return IWOPModel.update({name:iwop.name},{...iwop})
    }  
    
    delete(iwop: IWOP):mongoose.Query<void>{
        return IWOPModel.remove({name: iwop.name})
    }
}