const fs = require('fs')

let listadoPorHacer = []

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer)
    fs.writeFile('././DB/data.json', data, (err) => {
        if (err) return console.log(err);
        else return console.log('Se guardo Correctamente');
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../DB/data.json')
    } catch (error) {
        listadoPorHacer = []
    }


}
const crear = (descripcion) => {
    cargarDB()
    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer)
    guardarDB()
    return porHacer
}

const getLista = () => {
    cargarDB()
    return listadoPorHacer
}

const actualizar = (descripcion, completado = true) => {
    cargarDB()
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    })
    if (index >= 0) {
        listadoPorHacer[index].completado = completado
        guardarDB()
        return true
    } else {
        return false
    }
}

const borrar = (descripcion) => {
    cargarDB()
    let vector = listadoPorHacer.filter(valor => {
        return valor.descripcion !== descripcion
    })
    if (vector.length === listadoPorHacer.length) {
        return false
    } else {
        listadoPorHacer = vector
        guardarDB()
        return true
    }



}
module.exports = {
    crear,
    getLista,
    actualizar,
    borrar
}