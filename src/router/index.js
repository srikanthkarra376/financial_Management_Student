import Vue from 'vue'
import Router from 'vue-router'
import Dashbord from '@/components/Dashbord'
import EditStudent from '@/components/EditStudent'
import AddStudent from '@/components/AddStudent'
import ViewStudent from '@/components/ViewStudent'



Vue.use(Router)

export default new Router({
  routes: [
    {
     path:'/',
     name:'dashbord',
    component:Dashbord
  },
  {

    path:'/new',
    name:'new-student',
    component:AddStudent
  },
    
  {

    path:'/edit/:student_id',
    name:'edit-student',
    component:EditStudent
  },
  {

    path:'/view/:student_id',
    name:'view-student',
    component:ViewStudent
  }
]
})
