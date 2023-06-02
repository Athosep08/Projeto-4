import { Prisma, PrismaClient } from "@prisma/client"
import express from 'express'

const app = express()
const prisma = new PrismaClient()

app.use(express.json());

app.get('/listar', async (req, res) =>{
    const lista = await prisma.cadastro_.findMany()
    res.json(lista)
})

app.post('/postar', async (req, res) =>{
    const criar =await prisma.cadastro_.create({
        data: req.body
    })
    console.log(req.body)
    res.send(req.body)
})

app.delete('/deletar/:id', async (req, res) => {
    const { id } = req.params
    const user = await prisma.cadastro_.delete({
      where: {
        id,
      },
    })
    res.json(user)
  })

app.put('/editar/:id', async (req, res) =>{
    const { id } = req.params
    const user = await prisma.cadastro_.update({
       where: { id },
       data: req.body
        })
        res.json(user)
    })
  app.listen(3000, () => {
    console.log("Esta funcionando")
})

