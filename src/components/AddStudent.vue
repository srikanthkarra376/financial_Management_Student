<template>
<div id="new-student">
  <h3>Add a New student</h3>
  <div class="row">
    <form @submit.prevent="saveSrudent" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input type ="text" v-model="student_id" required>
          <label>Student_Id#</label>
        </div>
      </div>
        <div class="row">
        <div class="input-field col s12">
          <input type ="text" v-model="father_name" required>
          <label>FatherName</label>
        </div>
        </div>
        <div class="row">
        <div class="input-field col s12">
          <input type ="text" v-model="student_id" required>
          <label>Student_Id#</label>
        </div>
        </div>
        <div class="row">
        <div class="input-field col s12">
          <input type ="text" v-model="fee_paid" required>
          <label>Fee paid</label>
        </div>
        </div>
        <div class="row">
        <div class="input-field col s12">
          <input type ="text" v-model="due_fee" required>
          <label>Due fee</label>
        </div>
        </div>
      
    </form>
    <router-link to="/" class="btn blue">Add</router-link>
  </div>
</div>
</template>
<script>
export default {
  name :'new-student',
  data () {
    return {

    }
  }
}
</script>
