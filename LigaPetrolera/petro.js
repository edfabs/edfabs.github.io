var grid = document.querySelector('.grid');
var posts = document.querySelectorAll('.grid-item');
imagesLoaded( posts, function() {
    console.log("images loaded");
});
var msnry = new Masonry( grid, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {
  // options
});