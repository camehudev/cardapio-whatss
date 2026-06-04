import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router' // Se você adicionou o Router no setup do Vite

// Importações do PrimeVue
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css' // Ícones do menu

// Importação de componentes
import Menubar from 'primevue/menubar'; // ◄ Importa o componente aqui
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

import App from './App.vue'


const app = createApp(App)

// Configuração do Plugin
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})

// 2. Registre globalmente no app
// eslint-disable-next-line vue/multi-word-component-names
app.component('Menubar', Menubar); // ◄ Agora <Menubar /> vira uma tag global
// eslint-disable-next-line vue/multi-word-component-names
app.component('Accordion', Accordion);
// eslint-disable-next-line vue/multi-word-component-names
app.component('AccordionPanel', AccordionPanel);
// eslint-disable-next-line vue/multi-word-component-names
app.component('AccordionHeader', AccordionHeader);
// eslint-disable-next-line vue/multi-word-component-names
app.component('AccordionContent', AccordionContent);

app.use(PrimeVue);
app.use(createPinia())
app.use(router)




app.mount('#app')
