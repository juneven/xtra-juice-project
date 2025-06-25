import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 1000,
    offset: 100
});

const app = createApp(App)

app.use(router);
app.mount('#app');