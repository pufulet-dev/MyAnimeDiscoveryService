<template>
  <div id="footer">
    <span class="linksAndTitle">
      <ul>
        <!-- <p class="footerTitle"> Site Links </p>  -->
        <p class="links">
          <router-link to="/" class="links"> Home </router-link>
          <router-link to="/categories" class="links"> Categories  </router-link>
          <router-link to="/browse" class="links">  Browse </router-link>
          <router-link to="/search" class="links">  Search </router-link>
        </p>
      </ul>
    </span>
    <span class='media'>
      <p class="follow"> Follow us here: </p>
      <!-- <a href="https://www.facebook.com/profile.php?id=100009957168694"> <img src="https://i.pinimg.com/originals/b7/63/69/b763699fd1fa3bfb374442593ae642e1.png" class="smedia0"> </a>
      <a href="https://www.linkedin.com/in/madalina-chirpicinic-43ab821b5/"> <img src="https://i.pinimg.com/originals/b6/8a/db/b68adb337de3d7828c3354b9747e285f.png" class="smedia2"> </a>
      <a href="https://www.linkedin.com/in/madalina-chirpicinic-43ab821b5/"> <img src="https://i.pinimg.com/originals/8a/77/05/8a770507298d728a1e3e039a0507dd8e.png" class="smedia1"> </a> -->
      <a href="https://www.facebook.com/profile.php?id=100009957168694"> <img src="https://facebookbrand.com/wp-content/uploads/2019/10/flogo_RGB_HEX-BRC-Site-250.png?w=250&h=250" class="smedia0"> </a>
      <a href="https://www.linkedin.com/in/madalina-chirpicinic-43ab821b5/"> <img src="https://icons-for-free.com/iconfiles/png/512/instagram+logo+logo+website+icon-1320190502826859478.png" class="smedia1"> </a>
      <a href="https://www.linkedin.com/in/madalina-chirpicinic-43ab821b5/"> <img src="https://www.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png" class="smedia2"> </a>
    </span>
    <h6 class="endOfPage"> Made in Moldova. @2020 Mădălina Chirpicinic </h6>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
    }
  }
}
</script>

<style>
  @import "https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap";
  #footer {
    background: black;
    /* heigth: 200px; */
    margin: 27px;
  }
  .links {
    font-size: 30px;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    justify-content: center;
    font-family: 'Indie Flower', cursive;
    color:  white;
    width: 100%;
    margin: 20px;
  }
  .media {
    margin-left: 60px;
    margin-right: auto;
    display: block;
    margin-right: 93px;
  }
  .smedia0,
  .smedia2 {
    width: 66px;
    height: 66px;
  }
  .smedia1 {
    width: 88px;
    height: 88px;
  }
  .endOfPage {
    font-size: 20px;
    color: white;
    margin-bottom: 15px;
  }
  .follow {
    font-size: 30px;
    color: #ea2d2e;
    font-family: 'Indie Flower', cursive;
  }

  /* HOVER */
   .links:hover {
    color: #ea2d2e;
  }
  .smedia0:hover,
  .smedia1:hover,
  .smedia2:hover {
  /* border:#ea2d2e dashed 1px; */
    transform: scale(1.2);
  }
  /* HOVER */
</style>
