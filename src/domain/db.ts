import {IWOP} from './models'

const iwops:IWOP[] = [
    new IWOP('a', 2, true),
    new IWOP('b', 2, false),
    new IWOP('c', 1, true),
    new IWOP('d', 1, true),
    new IWOP('e', 1, true),
    new IWOP('f', 1, true),
    new IWOP('g', 1, false)
]

class DB{
    constructor(){}

    public query = (name?: string) : IWOP[] =>{
        if(!name){
            return iwops
        }
        return iwops.filter(
            (iwop,i):boolean => {return iwop.name === name}, iwops
        )
    }
}

export const db = new DB()