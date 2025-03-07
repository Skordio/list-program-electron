import { app, BrowserWindow } from 'electron';
import * as path from 'path';

import { createApp } from 'vue'
// import './src/style.css'
import App from './App.vue'


app.on('ready', () => {
  console.log('App is ready');

  const win = new BrowserWindow({
      width: 600,
      height: 400
  });
    
  const indexHTML = path.join(__dirname + '/index.html');
  win.loadFile(indexHTML).then(() => {

    const vueApp = createApp(App)
    vueApp.mount('#app')
  });
});