<template>
<div id="edit-student">
  <h3>Edit Student</h3>
   <div class="row">
    <form @submit.prevent="updateStudent" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input disabled type ="text" v-model="student_id" required>
       
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type ="text" v-model="name" required>
     
        </div>
        </div>
        <div class="row">
        <div class="input-field col s12">
          <input type ="text" v-model="father_name" required>
  
        </div>
        </div>
        
        <div class="row">
        <div class="input-field col s12">
          <input type ="text" v-model="fee_paid" required>
        
        </div>
        </div>
        <div class="row">
        <div class="input-field col s12">
          <input type ="text" v-model="due_fee" required>
        
        </div>
        </div>
         <button type="submit" class="btn  green"> Update</button>
         <router-link to="/" class="btn orange">CANCEL</router-link>
    </form>
 
  
  </div>
</div>
</template>
<script>
import db from './firebaseinit'
export default {
  name :'edit-student',
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
      
          this.fee_paid = doc.data().fee_paid
          this.due_fee = doc.data().due_fee
        })
      })
    },
    updateStudent() {
       db.collection('Students').where('student_id','==',this.$route.params.student_id)
      .get().then(querySnapshot=>{
        querySnapshot.forEach(doc=>{
          doc.ref.update({
            student_id:this.student_id,
            name:this.name,
            father_name:this.father_name,
         
            fee_paid:this.fee_paid,
            due_fee:this.due_fee
            }).then (()=>{
              this.$router.push({name:'view-student',
              params:{ student_id :this.student_id}})
            })
        })
      })

    }
    
  }
}
</script>
