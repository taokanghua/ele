import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from "../components/tabbar/home.vue"
import supermaket from "../components/tabbar/supermaket.vue"
import order from "../components/tabbar/order.vue"
import my from "../components/tabbar/my.vue"
import shopinfo from "../components/type/shopinfo.vue"

import relfood from "../components/type/rel-food.vue"

export default new Router({
  routes: [
    {path: "/", redirect: "/home"},
    {path: '/home', name: 'home', component: home},
    {path: "/supermaket", name: "supermaket", component: supermaket},
    {path: "/order", name: "order", component: order},
    {path: "/my", name: "my", component: my},
    {path: "/relfood", name: "relfood", component: relfood},
    {path: "/relfodd/shopinfo/:id", name: "shopinfo", component: shopinfo}
  ],
  linkActiveClass: "now"
})
