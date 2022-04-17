'use strict'

//iniciar el app
const {app, BrowserWindow } = require('electron')

// imprimiendo un msj antes de salir 
app.on('before-quit', () => {
    console.log('Saliendo...')
})

// creando una ventana
app.on('ready', () => {

    //propiedades de la ventana 
    let win  = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'Social App',
        center: true,
        maximizable: true,
        minimizable: true,
        resizable: true,
    })
    
    win.once('ready-to-show', () => {
        win.show()
    })

    // saber la posicion de la ventana
    // win.on('move', () => {
    //     const position = win.getPosition()
    //     console.log(position);
    // })

    //al cerrar la ventana se cierra el programa
    win.on('close', () => {
        win = null
        app.quit()
    })

    win.loadURL(`file://${__dirname}/src/index.html`)
})

