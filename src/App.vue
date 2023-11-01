<template>
  <div class="header">
    <h1>Example Company</h1>
    <h2>This is an example website to show you what we can do for you.</h2>
  </div>

  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact US</router-link>
  </nav>

  <router-view />

  <div class="footer">
    <div class="promo">
      <h1> &copy; Website Created by WixzStudios</h1>
      <p>check out services <a style="color: blue; text-decoration: underline;" href="https://www.fiverr.com/cringekidy"
          target="about:blank">here</a> </p>
      <p>While you are at it have a look at the Socails to 😁</p>
      <div class="sm_icons">
        <a href="https://www.facebook.com/profile.php?id=61551367002367">
          <img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-512.png">
        </a>
        <a href="https://www.instagram.com/wixzstuidos/">
          <img
            src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-512.png">
        </a>
      </div>
    </div>

    <div class="contactUs">
      <h1>Contact Us</h1>
      <p>LandLine: 077777777</p>
      <p>Send us an email: <a style="color: blue; text-decoration: underline;" href="/contact">Click here</a></p>
      <p>Website: <a style="color: blue; text-decoration: underline;"
          href="https://wixzstudios.wordpress.com/">wixzstudios.wordpress.com</a></p>
    </div>

    <div class="findUs">
      <h1>Find us here</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100945.38730850535!2d176.0690811563895!3d-37.75385593814466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6e76e77bd464e5%3A0x500ef6143a39926!2sTauranga!5e0!3m2!1sen!2snz!4v1698878352558!5m2!1sen!2snz"
        width="300" height="250" allowfullscreen="false" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<style>
.header {
  text-align: center;
}

nav {
  display: flex;
  justify-content: space-evenly;
}

a {
  color: black;
  text-decoration: none;
}

.footer {
  margin-top: auto;
  text-align: center;
  display: inline-flex;
  justify-content: space-evenly;
  width: 100%;

}

.sm_icons img {
  width: 42px;
  height: 42px;
  margin-right: 10px;
}
</style>
