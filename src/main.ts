
  import { createApp } from 'vue'
  import { createRouter, createWebHistory } from "vue-router";
  import App from "./App.vue";
  

  import AplicacinDeComidaQComemo from './pages/AplicacinDeComidaQComemo.vue';
  import "./global.css";;

  interface Route {
    path: string;
    name: string;
    component: any;
  }


  const routes: Route[] = [{
          path: "/",
          name: "AplicacinDeComidaQComemo",
          component: AplicacinDeComidaQComemo
        }]

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  router.beforeEach((toRoute, _, next) => {
    const metaTitle = toRoute?.meta?.title as string;
    const metaDesc = toRoute?.meta?.description as string;

    window.document.title = metaTitle || 'Q'comemos---1'
    if (metaDesc) {
      addMetaTag(metaDesc)
    }
    next();
  })
  
  const addMetaTag = (value: string) => {
    const element = document.querySelector(`meta[name='description']`);
    if (element) {
      element.setAttribute("content", value);
    }
  };

  

  createApp(App).use(router).mount('#app')
  
  export default router