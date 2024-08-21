const express = require("express")
const app = express()
const porta = 3000

const bebida= require('./controllers/crud-bebida.js')
const comida= require('./controllers/crud-comida.js')
const horario= require('./controllers/crud-horario.js')

const brinquedo= require('./crud-brinq.js')
const funcionario= require('./crud-func.js')
const patrocinio= require('./crud-patro.js')

const artista= require('./artista.js')
const palco= require('./palco.js')
const genero= require('./genero.js')




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

app.get("/brinquedos", (req, res) => {
    const content = brinquedo.index()
    res.json(content)
})

app.get("/funcionarios", (req, res) => {
    const content = funcionario.index()
    res.json(content)
})

app.get("/patrocinadores", (req, res) => {
    const content = patrocinio.index()
    res.json(content)
})

app.post("/brinquedos", (req,res)=>{
    const code = brinquedo.store(req.body)
    res.status(code).json()
})

app.post("/funcionarios", (req,res)=>{
    const code = funcionario.store(req.body)
    res.status(code).json()
})
app.post("/patrocinadores", (req,res)=>{
    const code = patrocinio.store(req.body)
    res.status(code).json()
})

app.put("/brinquedos/:id", (req, res)=>{
    const code = brinquedo.update(req.params.id, req.body)
    res.status(code).json()
})
app.put("/funcinarios/:id", (req, res)=>{
    const code = funcionario.update(req.params.id, req.body)
    res.status(code).json()
})
app.put("/patrocinadores/:id", (req, res)=>{
    const code = patrocinio.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/brinquedos/:id", (req,res) => {
    const code = brinquedo.destroy(req.params.id)
    res.status(code).json()
})
app.delete("/funcionarios/:id", (req,res) => {
    const code = funcionario.destroy(req.params.id)
    res.status(code).json()
})
app.delete("/patrocinadores/:id", (req,res) => {
    const code = patrocinio.destroy(req.params.id)
    res.status(code).json()
})

app.get("/artista", (req, res) => {
    const content = artista.index()
    res.json(content)
})

app.get("/palco", (req, res) => {
    const content = palco.index()
    res.json(content)
})

app.get("/genero", (req, res) => {
    const content = genero.index()
    res.json(content)
})

app.post("/artista", (req,res)=>{
    const code = artista.store(req.body)
    res.status(code).json()
})

app.post("/palco", (req,res)=>{
    const code = palco.store(req.body)
    res.status(code).json()
})
app.post("/genero", (req,res)=>{
    const code = genero.store(req.body)
    res.status(code).json()
})

app.put("/artista/:id", (req, res)=>{
    const code = artista.update(req.params.id, req.body)
    res.status(code).json()
})
app.put("/palco/:id", (req, res)=>{
    const code = palco.update(req.params.id, req.body)
    res.status(code).json()
})
app.put("/genero/:id", (req, res)=>{
    const code = horario.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/artista/:id", (req,res) => {
    const code = artista.destroy(req.params.id)
    res.status(code).json()
})
app.delete("/palco/:id", (req,res) => {
    const code = palco.destroy(req.params.id)
    res.status(code).json()
})
app.delete("/genero/:id", (req,res) => {
    const code = genero.destroy(req.params.id)
    res.status(code).json()
})

app.listen(porta, ()=>{
    console.log(`Iniciou na porta ${porta}`)
})