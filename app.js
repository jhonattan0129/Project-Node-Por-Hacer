const { argv } = require('./config/yargs')
const { crear, getLista, actualizar, borrar } = require('./por-hacer/por-hacer')
const color = require('colors')

let comando = argv._[0]

switch (comando) {
    case 'crear':
        let tarea = crear(argv.descripcion)
        console.log(tarea);
        break;

    case 'listar':
        let listado = getLista()
        for (lista of listado) {
            console.log('======Por Hacer======'.green);
            console.log(lista.descripcion);
            console.log('Estado: ', lista.completado);
            console.log('======Por Hacer======'.green);
        }
        break

    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado)
        if (actualizado == true) {
            console.log('Tarea actualizada')
        } else {
            console.log('No se pudo actualizar la tarea')
        }
        break

    case 'borrar':
        let eliminar = borrar(argv.descripcion)
        if (eliminar == true) {
            console.log('Tarea borrarda')
        } else {
            console.log('No se pudo borrar la tarea')
        }
        break
    default:
        console.log('Comando no es reconocido');
}