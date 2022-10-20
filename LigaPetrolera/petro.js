
var posts = document.querySelectorAll('.contgaleria');
imagesLoaded( posts, function() {
    console.log("images loaded");
    var grid = document.querySelector('.grid');
    var msnry = new Masonry( grid, {
        // options
        itemSelector: '.grid-item',
        columnWidth: 300,
        gutter: 10
    });
});