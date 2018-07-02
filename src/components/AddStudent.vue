<template>
<div id="new-student">
  <h3>Add a New student</h3>
  <div class="row">
    <form @submit.prevent="saveStudent" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input type ="text" v-model="student_id" required>
          <label>Student_Id#</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type ="text" v-model="name" required>
          <label>Student_Name</label>
        </div>
        </div>
        <div class="row">
        <div class="input-field col s12">
          <input type ="text" v-model="father_name" required>
          <label>Father_Name</label>
        </div>
        </div>
        
        <div class="row">
        <div class="input-field col s12">
          <input type ="text" v-model="fee_paid" required>
          <label>Fee_paid</label>
        </div>
        </div>
        <div class="row">
        <div class="input-field col s12">
          <input type ="text" v-model="due_fee" required>
          <label>Due_fee</label>
        </div>
        </div>
         <button type="submit" class="btn  green"> SUBMIT</button>
         <router-link title="Add Student" to="/" class="btn orange">CANCEL</router-link>
    </form>
 
  
  </div>
</div>
</template>
<script>
import db from './firebaseinit'
export default {
  name :'new-student',
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
  methods:{
    saveStudent() {
      db.collection('Students').add({
        student_id: this.student_id,
        name:this.name,
        father_name:this.father_name,
        fee_paid:this.fee_paid,
        due_fee:this.due_fee
      }).then(docRef=>this.$router.push('/'))
      .catch(error=>console.log(err))
    }
      
  }
}
</script>
