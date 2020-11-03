<template>
  <div id="app">
    <header>
      <div class="container">
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/book">Books</router-link>
          <router-link to="/about">About</router-link>
        </nav>
        <img src="https://res.cloudinary.com/dbfuiddgm/image/upload/v1602354594/black-books/logo2_wwfha2.jpg" />
      </div>
    </header>
    <main>
      <notification/>
    <router-view />
    </main>
  </div>
</template>
<script>
import Notification from '@/cmps/Notification'
export default {
  components:{
    Notification
  }
}
</script>