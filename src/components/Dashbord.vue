<template>
<div id="dashbord">
  <ul class="collection with-header">
    <li class="collection-header">
      <h4>Students</h4>
    </li>
  <li  v-for="student in students" v-bind:key="student.id" class="collection-item">
    {{student.student_id}}   :   {{student.name}} ,  {{student.father_name}} 
    <router-link v-bind:to="{name:'view-student',params:{student_id:student.student_id}}" class="secondary-content">
    <i class="fa fa-eye"/>
    </router-link>
  </li>
   
  </ul>
  <div class="fixed-action-btn">
    <router-link to="/new" class="btn-floating btn-large red">
    <i class="fa fa-plus"/>
      </router-link>
  </div>
</div>
</template>
<script>
import db from './firebaseinit'
export default {
name :'dashbord',
  data () {
    return {
      students :[]

    }
  },
  created(){
   db.collection('Students').get().then(querySnapshot =>{
     querySnapshot.forEach(doc=>{
     
   const data = {
     'id':doc.id,
     'student_id':doc.data().student_id,
     'name':doc.data().name,
     'father_name':doc.data().father_name,
     'Class':doc.data().Class,
     'fee_paid':doc.data().fee_paid,
      'due-fee':doc.data().due_fee
   }
   this.students.push(data)
       
     })
   })


  }
}
</script>
<style scoped>
#dashbord {
background:black;
}

</style>
