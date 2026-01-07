<template>
  <div class="wapper-form">
    <form @submit.prevent="sendMessage">
      <div class="fields">
        <div class="field half">
          <label>NAME</label>
          <input type="text" v-model="form.name" placeholder="Name">
        </div>
        <div class="field half">
          <label>EMAIL</label>
          <input type="email" v-model="form.email" placeholder="Email">
        </div>
        <div class="field">
          <label>MESSAGE</label>
          <textarea v-model="form.message"></textarea>
        </div>
        <div class="btn2">
          <div class="actions">
            <button type="submit" class="button btn next scrolly">SEND MESSAGE</button>
          </div>
          <div class="actions">
            <button type="button" class="button btn next scrolly" @click="clearForm">CLEAR</button>
          </div>
        </div>
      </div>
    </form>
    <div class="social">
      <div class="phone">
        <h3>PHONE</h3>
        <p>(000) 000-0000 x12387</p>
      </div>
      <div class="email">
        <h3>EMAIL</h3>
        <p>information@untitled.tld</p>
      </div>
      <div class="address">
        <h3>ADDRESS</h3>
        <p>1234 Somewhere Road #5432<br>Nashville, TN 00000 - United States of America</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const clearForm = () => {
  form.name = ''
  form.email = ''
  form.message = ''
}

const sendMessage = () => {
  const { name, email, message } = form

  if (!name || !email || !message) {
    alert('Vui lòng nhập đầy đủ thông tin!')
    return
  }

  if (!isValidEmail(email)) {
    alert('Email không hợp lệ!')
    return
  }

  console.log('Form data:', { ...form })
  alert('Gửi tin nhắn thành công!')
  clearForm()
}
</script>


<style scoped lang="scss">
@use '@/assets/scss/variables' as variables;
.wapper-form {
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-wrap: wrap;
  background-color: variables.$primary-color;
  color: variables.$white;
  padding: 2em 0;

  form {
    width: 60%;
    padding: 65px 50px;
    min-width: 300px;
  }

  .social {
    width: 40%;
    display: flex;
    flex-direction: column;
    min-width: 250px;
    gap: 1.5em;
    justify-content: center;
  }
}

.field {
  margin-bottom: 2rem;
}

.half {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  > div {
    flex: 1 1 120px;
  }
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 14px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 1px;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid variables.$border-color;
  color: variables.$white;
  font-size: 16px;
  border-radius: 4px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: variables.$secondary-color;
    background-color: rgba(255, 255, 255, 0.15);
  }
}

textarea {
  min-height: 200px;
  resize: vertical;
}

.btn2 {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  .actions {
    flex: 1 1 120px;
    button {
      width: 100%;
      text-align: center;
      font-size: 16px;
      padding: 0.9rem 0;
      border-width: 2px;
      cursor: pointer;
      background: transparent;
    }
  }
}

.phone,
.email,
.address {
  border: 1px solid variables.$border-color;
  min-height: 120px;
  padding: 30px 20px;
  transition: all 0.3s ease;
  background: transparent;
  border-radius: 8px;
  margin-bottom: 1em;
  &:hover {
    background-color: variables.$hover-color;
    border-color: variables.$secondary-color;
  }
  h3 {
    font-size: 18px;
    margin-bottom: 1rem;
    color: variables.$secondary-color;
    font-weight: bold;
  }
  p {
    font-size: 15px;
    line-height: 1.6;
    color: variables.$text-color;
    margin: 0;
  }
}

@media (max-width: variables.$breakpoint-lg) {
  .wapper-form {
    flex-direction: column;
    form, .social {
      width: 100%;
      min-width: 0;
      padding: 30px 10px;
    }
    .social {
      flex-direction: row;
      gap: 1em;
      justify-content: space-between;
      align-items: stretch;
    }
  }
  .btn2 {
    flex-direction: column;
    gap: 0.5rem;
  }
}

@media (max-width: variables.$breakpoint-sm) {
  .wapper-form {
    form, .social {
      padding: 15px 5px;
    }
    .social {
      flex-direction: column;
      gap: 1em;
    }
  }
}
</style>