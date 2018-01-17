<!DOCTYPE html>
<html>

<?php include 'parts/head.php' ?>

<body>
<?php include 'parts/header.php' ?>
<section class="header">
<div class="container">
<h4>blog</h4>
<h5>Home>Blog</h5>
</div>
</section>
<section class="blog">
    <div class="container">
    <div class="search-blog">
    <input type="text" name="search" placeholder="searching" class="add-icon">
    </div>
    <div class="blog-left">
    <?php include 'parts/post.php' ?>
    <div class="navigation">
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
    </div>
    </div>
    <div class="blog-right">
    <div class="search">
        <input type="text" name="search" placeholder="searching" class="add-icon">
    </div>
    <h4>recent posts</h4>
    <div class="recent-posts">
    <?php include 'parts/post.php' ?>
    </div>
    <h4>LATEST PROJECTS</h4>
    <div class="projects">
    <div class="project"><img src="img/projects/main1.jpg" alt=""></div>
    <div class="project"><img src="img/projects/main1.jpg" alt=""></div>
    <div class="project"><img src="img/projects/main1.jpg" alt=""></div>
    <div class="project"><img src="img/projects/main1.jpg" alt=""></div>
</div>
    <h4>blog categories</h4>
    <ul>
        <li>Building</li>
        <li>Company</li>
        <li>Design</li>
        <li>Press</li>
        <li>Tips</li>
    </ul>

    </div>
</section>
<?php include 'parts/footer.php' ?>
<script src="js/files/blognav.js"></script>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript" src="slick/slick.min.js"></script>

</body>
</html> 

