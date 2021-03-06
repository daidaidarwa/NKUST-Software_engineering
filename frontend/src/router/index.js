import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Picture from '@/components/Picture'
// import Store from '@/components/Store'
import Goods from '@/components/Goods'
import Search from '@/components/SearchResult'
import Ad from '@/components/Ad'
import CheckBuy from '@/components/CheckBuy'
import Cart from '@/components/Cart'

Vue.use(Router)

export default new Router ({
    routes: [
        {
          path: '/',
          components: {
            default: Home,
          },
          children:[
              {
                path:'',
                components:{
                  ad: Ad,
                  picture: Picture
                },
              },
              {
                path: '/goods/:id',
                name: 'goods',
                components: {
                  goods: Goods
                }
              },
              {
                path: '/search',
                name: 'search',
                components: {
                  search: Search
                }
              }
            ]
        },
        {
          path: '/cart',
          name: 'cart',
          component: Cart,
            // checkbuy: CheckBuy
          children:[
            {
              path:'checkbuy',
              name: 'checkbuy',
              components: {
                checkbuy: CheckBuy
              }
            }
          ]
        },
    ],
    mode: 'history'
})

