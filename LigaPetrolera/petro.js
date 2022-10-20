
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

var posts = document.querySelectorAll('.contInstalaciones');
imagesLoaded( posts, function() {
    console.log("images loaded");
    var grid = document.querySelector('.grid');
    var msnry = new Masonry( grid, {
        // options
        itemSelector: '.grid-item-instalaciones',
        columnWidth: 450,
        gutter: 10
    });
});