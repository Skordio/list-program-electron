import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import type {LooseToDoEntry} from './components/types'


var newEntryList:Array<LooseToDoEntry> = [
    {   details: "Improve new todo list app"},
    {   details: "Make Coffee"},
    {   details: "This list is passed in with props"}];

const app = createApp(App)
app.mount('#app')
