const db = [];
const artista = require('./artista.js');
let nextId = 1;

const model = (genero, id = nextId++) => {
    
    if(genero.index()){
        return 200
    } else {
        if(
            genero.nome != undefined && 
            genero.nome != "" && 
            artista.show (id_artista)
        ) {
        return {
            id,
            genero: genero.nome,
            id_artista
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