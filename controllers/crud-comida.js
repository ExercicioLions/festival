let db=[]
let nextId =1
const model =(comida, id = nextId++) =>{
    if(comida.nome !='' && comida.nome != undefined && comida.loja != undefined && comida.loja != '' ){
        comida.id = id
        return{
            id,
            nome: comida.nome,
            loja: comida.loja
        }

    }
}

const store =(body)=>{
    const novo= model(body)
    if(novo){
        db.push(novo)
        return 201
    }else{
        return 400
    }
}

const index = () => db

const show = (id) => db.find((el) => el.id == id)

const update = (id, body) => {
    const index = db.findIndex((el) => el.id == id)
    const novo = model(body, parseInt(id))

    if(index != -1 && novo){
        db[index]= novo
        return 200
    }else{
        return 400
    }
}

const destroy =(id) =>{
    const index = db.findIndex((el) => el.id == id)
    if(index != -1){
        db.splice(index,1)
        return 200
    }else{
        return 404
    }
}

module.exports={
    index,
    store,
    show,
    update,
    destroy
}