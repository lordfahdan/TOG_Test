<script>
import { mapActions, mapState } from 'pinia'
import { useFeeStore } from '@/stores/Fee'
import Swal from 'sweetalert2'

export default {
  data: () => ({
    name: '',
    desc: ''
  }),
  computed: {
    ...mapState(useFeeStore, ['fees']),
    fee_code() {
      return this.fees[this.fees.length - 1].fee_code + 1
    }
  },
  methods: {
    ...mapActions(useFeeStore, ['addFee']),
    createFee(name, desc, fee_code){
      if(!name) return Swal.fire({
        title: 'Error!',
        text: 'Field Fee Type Name should not be empty',
        icon: 'error',
        confirmButtonText: "OK",
      })
      if(!desc) return Swal.fire({
        title: 'Error!',
        text: 'Field Description should not be empty',
        icon: 'error',
        confirmButtonText: "OK",
      })

      const obj = {name, desc, fee_code, is_active: true}
      this.addFee(obj).then((e) => {
        Swal.fire({
          title: 'Success!',
          text: e,
          icon: 'success',
          confirmButtonText: 'OK'
        })
      }).finally(() => {
        this.$router.push('/fee-type')
      })
    }
  }
}
</script>

<template>
  <div>
    <ul class="history-link">
      <li class="link">
        <a>Master Data Management</a>
        <i class="fa-solid fa-chevron-right"></i>
      </li>
      <li class="link">
        <router-link to="/fee-type">Fee Type</router-link>
        <i class="fa-solid fa-chevron-right"></i>
      </li>
      <li class="link active">
        <a>Create Fee Type</a>
        <i class="fa-solid fa-chevron-right"></i>
      </li>
    </ul>
    <h1>Create Fee Type</h1>
    <form @submit.prevent="createFee(name, desc, fee_code)">
      <div class="card-form">
        <div class="fee-form">
          <div class="input-container">
            <div class="input-set">
              <label for="feeName">Fee Type Name<span class="required">*</span></label>
              <input type="text" name="feeName" id="feeName" v-model="name">
            </div>
            <div class="input-set">
              <label for="desc">Description</label>
              <textarea name="desc" id="desc" rows="4" v-model="desc"></textarea>
            </div>
          </div>
          <div class="additional">
            <h2>For Interface Purpose</h2>
            <div class="input-set">
              <label for="feeName">
                Fee Type Code
                <span class="required">*</span>
                <i class="fa-solid fa-circle-info" data-bs-toggle="tooltip" data-bs-placement="left" title="Value would be generate based on length of list Fee"></i>
              </label>
              <input type="text" :value="fee_code" disabled>
            </div>
          </div>
        </div>

        <h2 class="underline">Translation</h2>
        <div class="translate">
          <nav class="tab">
            <a class="show">Indonesia</a>
            <a class="">Chinese Simplified
              <i class="fa-solid fa-triangle-exclamation"></i>
            </a>
            <span>
              Note:
              <i class="fa-solid fa-triangle-exclamation"></i>
              Incomplete data
            </span>
          </nav>
          <div class="content">
            <div class="input-container">
              <div class="input-set">
                <label>Fee Type Name</label>
                <div class="text-input"></div>
              </div>
              <div class="input-set">
                <label>Description</label>
                <div class="textarea-input"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="button-group">
        <button type="submit">SAVE</button>
        <router-link to="/fee-type" custom v-slot="{ navigate }">
          <button @click="navigate" role="link">CANCEL</button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<style scoped>
.history-link {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 10px;
}

.history-link .link {
  display: flex;
  align-items: center;
  margin-right: 12px;
  font-size: 11px;
}

.history-link .link.active a {
  color: #E84D0E;
}

.history-link .link a {
  text-decoration: none;
  color: #818181;
  margin-right: 12px;
}

h1 {
  color: #333333;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 40px;
}

h2 {
  font-weight: 600;
  font-size: 20px;
  color: #333333;
  margin-bottom: 27px;
}

.underline {
  padding-bottom: 8px;
  border-bottom: 1px solid #D9DFE7;
}

.card-form {
  padding: 29px 25px 24px 35px;
  background: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 8px;
  border: 1px solid #D3D3D3;
}

.fee-form {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 113px;
}

.input-container {
  width: 100%;
}

.input-set {
  display: grid;
  grid-template-columns: 110px auto;
  gap: 40px;
  margin-bottom: 8px;
}

.input-set>* {
  display: block;
}

.input-set label {
  font-size: 15px;
  color: #333333;
}

.input-set input {
  width: 300px;
  outline: none;
  border: 1px solid #D3D3D3;
  border-radius: 8px;
  font-size: 12px;
  padding: 8px 12px;
}

.input-set textarea {
  width: 416px;
  outline: none;
  border: 1px solid #D3D3D3;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 12px;
}

.additional {
  background: #F3F4F4;
  border-radius: 8px;
  padding: 28px 33px;
  width: 512px;
  flex-shrink: 0;
}

.additional .input-set label {
  position: relative;
  white-space: nowrap;
}

.additional .input-set label i {
  position: absolute;
  top: -2px;
  cursor: pointer;
  right: -14px;
}

.input-set .required {
  color: #FF0000;
}

.translate {
  display: flex;
  align-items: start;
}

.tab {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}
.tab a {
  color: #333333;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  margin-bottom: 5px;
  background: #ECECEC;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #DDDDDD;
  padding: 12px 10px;
  border-radius: 4px 0px 0px 4px;
}
.tab a.show {
  background: #FFFFFF;
  position: relative;
}
.tab a.show::after {
  content: "";
  position: absolute;
  right: -5px;
  top: 0;
  bottom: 0;
  width: 10px;
  background: #ffffff;
}
.tab a i, .tab span i {
  color: #D91C1C;
}
.tab span {
  margin-top: 30px;
  font-size: 11px;
  font-style: italic;
  display: flex;
  align-items: center;
}
.tab span i {
  font-size: 16px;
  margin: 0 6px;
}
.content {
  background: #FFFFFF;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #E1E1E1;
  border-radius: 0px 8px 8px 8px;
  padding: 31px;
  width: 100%;
}
.content .text-input {
  height: 36px;
  padding: 8px 12px;
  width: 300px;
  border: 1px solid #D3D3D3;
  border-radius: 8px;
}
.content .textarea-input {
  height: 90px;
  padding: 8px 12px;
  width: 416px;
  border: 1px solid #D3D3D3;
  border-radius: 8px;
}
.button-group {
  margin-top: 16px;
  display: flex;
  align-items: center;
}
.button-group > * {
  outline: none;
  border: 1px solid #707070;
  border-radius: 6px;
  margin-right: 16px;
  text-align: center;
  padding: 8px 0;
  width: 80px;
  font-size: 13px;
  font-weight: 600;
  color: #333333;
}
.button-group > *:last-of-type {
  margin-right: 0;
}
.button-group > button[type="submit"] {
  border: none;
  background: #027F71;
  color: #ffffff;
}
</style>