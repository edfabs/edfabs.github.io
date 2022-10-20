var grid = document.querySelector('.grid');
var elem = document.querySelector('.grid-item');
var imgLoad = imagesLoaded( elem );
function onAlways( instance ) {
  console.log('all images are loaded');
}
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