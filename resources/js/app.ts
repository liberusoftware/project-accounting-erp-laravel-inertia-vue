import '../css/app.css';
import { createApp, h, type DefineComponent } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
const pages = import.meta.glob<DefineComponent>('./Pages/*.vue', {eager: true, import: 'default'});
createInertiaApp({resolve: name => { const page = pages[`./Pages/${name}.vue`]; if (!page) throw new Error('Unknown page'); return page; }, setup({el, App, props, plugin}) {createApp({render: () => h(App, props)}).use(plugin).mount(el);}});
