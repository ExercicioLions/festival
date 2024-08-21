const db = [];
const palco = require('./palco.js');
const nextId = 1;

const model = (artista, id = nextId++) => {
    
    if(palco.index()){
        return 200
    } else {
        if(
            artista.palco != undefined && 
            artista.nome != undefined && 
            artista.palco != "" && 
            artista.nome != "" &&
            palco.show (id_palco)
        ) {
        return {
            id,
            artista: body.nome,
            artista: body.palco,
            id_palco
            }
        }
    }
};

const store = body => {
    const novo = model (body)

    if(novo) {
        db.push(novo)

        return 201
    }

    return 400
}

const index = () => db;

const show = (id) => db.find((el) => el.id == id);

const update = (id, body) => {
    const index = db.findIndex(el => el.id == id);
    const novo = model(body, parseInt(id)); 

    if(index != -1 && novo) {
        db[index] = novo;
        return 200;
    }

    return 400;
};

const destroy = (id) => {
    const index =db.findIndex(el => el.id == id);

    if(index != -1) {
        db.splice(index, 1);
    }
};

module.exports = {
    store,
    index,
    show,
    update,
    destroy
}