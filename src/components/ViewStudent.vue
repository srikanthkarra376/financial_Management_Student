<template>
<div id="view-student">
<ul class="collection with-header">
  <li class="collection-header">
    <h4>{{name}}</h4>
  </li>
  <li class="collection-item"><strong>Student_ID# :  </strong> {{student_id}}  </li>
  <li class="collection-item"><strong>Father_Name :  </strong> {{father_name}}</li>
  <li class="collection-item"><strong>Fee_Paid  :  </strong> {{fee_paid}} $</li>
  <li class="collection-item"><strong>Fee_Due :  </strong> {{due_fee}} $</li>
</ul>
<router-link to="/" class="btn blue">BACK</router-link>
<button @click="deleteStudent"  class="btn red">DELETE</button>
<div class="fixed-action-btn">
    <router-link v-bind:to="{name:'edit-student',
    params: {student_id: student_id}}" class="btn-floating btn-large">
    <i class="fa fa-edit"></i>
      </router-link>
  </div>
</div>
</template>
<script>
import db from './firebaseinit'
export default {
  name:'view-student',
  data () {
    return {
     student_id:null,
     name:null,
     father_name:null,
     Class:null,
     fee_paid:null,
     due_fee:null

    }
  },
  beforeRouteEnter(to, from, next) {
    db.collection('Students').where('student_id', '==',to.params.student_id)
    .get().then(querySnapshot => {
      querySnapshot.forEach(doc =>{
        next(vm =>{
          vm.student_id = doc.data().student_id
          vm.father_name = doc.data().father_name
          vm.name = doc.data().name
          vm.fee_paid =doc.data().fee_paid
          vm.due_fee = doc.data().due_fee
          vm.Class = doc.data().Class
        })

      })
    })
  },
  watch: {
    '$route':'fetchData'
  },
  methods:{
    fetchData(){
      db.collection('Students').where('student_id','==',this.$route.params.student_id)
      .get().then(querySnapshot=>{
        querySnapshot.forEach(doc=>{
          this.student_id = doc.data().student_id
          this.name = doc.data().name
          this.father_name = doc.data().father_name
          this.class = doc.data().class
          this.fee_paid = doc.data().fee_paid
          this.due_fee = doc.data().due_fee
        })
      })
    },
    deleteStudent() {
      if (confirm('Are you Sure ?')){
        db.collection('Students').where('student_id','==',this.$route.params.student_id)
      .get().then(querySnapshot=>{
        querySnapshot.forEach(doc=>{
          doc.ref.delete()
          this.$router.push('/')
          
          
          })
        })
      }
    }
  }
 }
</script>
