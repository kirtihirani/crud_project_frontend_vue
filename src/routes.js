import { createRouter,createWebHistory } from "vue-router";
import AddEmployee from './components/AddEmployee.vue'
 const routes=[
    {
        name:'AddEmployee',
        path:'/AddEmployee',
        component:AddEmployee
    }
 ]

 const router= createRouter(
    {
        history:createWebHistory(),
        routes
    }
 );

 export default router;