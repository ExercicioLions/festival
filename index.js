const express = require("express")
const app = express()
const porta = 3000
const bebida= require('./controllers/crud-bebida.js')
const comida= require('./controllers/crud-comida.js')
const horario= require('./controllers/crud-horario.js')



app.use(express.json())

app.get("/comidas", (req, res) => {
    const content = comida.index()
    res.json(content)
})

app.get("/bebidas", (req, res) => {
    const content = bebida.index()
    res.json(content)
})

app.get("/horarios", (req, res) => {
    const content = horario.index()
    res.json(content)
})

app.post("/comidas", (req,res)=>{
    const code = comida.store(req.body)
    res.status(code).json()
})

app.post("/bebidas", (req,res)=>{
    const code = bebida.store(req.body)
    res.status(code).json()
})
app.post("/horarios", (req,res)=>{
    const code = horario.store(req.body)
    res.status(code).json()
})

app.put("/comidas/:id", (req, res)=>{
    const code = comida.update(req.params.id, req.body)
    res.status(code).json()
})
app.put("/bebidas/:id", (req, res)=>{
    const code = bebida.update(req.params.id, req.body)
    res.status(code).json()
})
app.put("/horarios/:id", (req, res)=>{
    const code = horario.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/comidas/:id", (req,res) => {
    const code = comida.destroy(req.params.id)
    res.status(code).json()
})
app.delete("/bebidas/:id", (req,res) => {
    const code = bebida.destroy(req.params.id)
    res.status(code).json()
})
app.delete("/horario/:id", (req,res) => {
    const code = horario.destroy(req.params.id)
    res.status(code).json()
})

app.listen(porta, ()=>{
    console.log(`Iniciou na porta ${porta}`)
})