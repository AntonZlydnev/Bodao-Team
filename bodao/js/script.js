$(function() {
  $('#cross-slide').crossSlide({
    speed: 45,
    fade: 1
  }, [
  { src: 'img/directions1.png', dir: 'up' },
  { src: 'img/directions2.png', dir: 'down' },
  { src: 'img/directions3.png', dir: 'up' },
  { src: 'img/directions4.png', dir: 'down' }
  ]);
  });