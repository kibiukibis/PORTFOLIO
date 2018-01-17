
<!DOCTYPE html>
<html>

<?php include 'parts/head.php' ?>

<body>
<?php include 'parts/header.php' ?>
<section class="header">
<div class="container">
<h4>contact us</h4>
<h5>Home>contact us</h5>
</div>
</section>
<section class="contact">
<div class="container">
    <h2>contact us</h2>
  <form action="">
    <input type="text" class="fill first-name" name="firstname" placeholder="First Name">
    <input type="text" class="fill Last-name" name="lastname" placeholder="Last Name">
    <input type="email" class="fill email" name="email" placeholder="Your E-Mail">
    <input type="url" class="fill url" name="url" placeholder="Website">
    <textarea class="message" name="message" placeholder="Your Message" ></textarea>
    <input type="submit" value="SEND">

  </form>
</div>
    <div id="map"></div>
</section>

<?php include 'parts/footer.php' ?>
<script src="js/files/maps.js"></script>
<script async defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCb2oP_MeowX0-7Ergz6LlTELmkV5uf3og&callback=initMap">
</script>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
  <script type="text/javascript" src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript" src="../node_modules/slick-carousel/slick/slick.min.js"></script>
</body>
</html> 