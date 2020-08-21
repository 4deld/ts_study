import {Router, Request, Response } from 'express'
import {IWOP} from '../../domain/models'
import {db} from '../../domain/db'

const router: Router = Router()

router.get('/',(req:Request,res:Response)=>{
    let data: IWOP[] = db.query()
    res.send(JSON.stringify(data))
})

router.get('/:name',(req:Request,res:Response)=>{
    let {name} = req.params
    let data: IWOP[] = db.query(name)
    res.send(JSON.stringify(data))
})

export const IWOPController: Router = router