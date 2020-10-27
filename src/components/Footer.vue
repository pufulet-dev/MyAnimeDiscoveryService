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
      <a href="https://www.facebook.com/profile.php?id=100009957168694"> <img src="https://facebookbrand.com/wp-content/uploads/2019/10/flogo_RGB_HEX-BRC-Site-250.png?w=250&h=250" class="smedia0"> </a>
      <a href="https://www.linkedin.com/in/madalina-chirpicinic-43ab821b5/"> <img src="https://icons-for-free.com/iconfiles/png/512/instagram+logo+logo+website+icon-1320190502826859478.png" class="smedia1"> </a>
      <a href="https://www.linkedin.com/in/madalina-chirpicinic-43ab821b5/"> <img src="https://www.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png" class="smedia2"> </a>
    </span>
    <span class="endOfPage"> Made in Moldova. @2020 Mădălina Chirpicinic </span>
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
    margin-top: 27px;
    margin-right: 33px;
    margin-left: 33px;
  }
  .links {
    font-size: 24px;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    justify-content: center;
    font-family: 'Indie Flower', cursive;
    color:  white;
    width: 95%;
    margin: 16px;
  }
  .media {
    margin-left: 40px;
    margin-right: 40px;
    display: block;
    margin-right: 93px;
  }
  .smedia0,
  .smedia2 {
    width: 45px;
    height: 50px;
  }
  .smedia1 {
    width: 75px;
    height: 80px;
  }
  .endOfPage {
    font-size: 16px;
    color: white;
    margin-bottom: 15px;
    margin-right: 43px;
  }
  .follow {
    font-size: 24px;
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
