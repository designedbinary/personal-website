var word1 = document.querySelector(".intro-title .word1");

var word2 = document.querySelector(".intro-title .word2");

var word3 = document.querySelector(".intro-title .word3");

const settings = {
  translateY: [100,0],
  opacity: [0,1],
  duration: 700,
  easing: [.2,1.17,.57,1.04],
}

var titleTiming = anime.timeline({
  //loop: true
});

titleTiming 
  .add({
    targets: word1,
    translateY: settings.translateY,
    opacity: settings.opacity,
    duration: settings.duration,
    easing: settings.easing,
  })
  .add({
    targets: word2,
    translateY: settings.translateY,
    opacity: settings.opacity,
    duration: settings.duration,
    easing: settings.easing,
    offset: "+=200"
  })
  .add({
    targets: word3,
    translateY: settings.translateY,
    opacity: settings.opacity,
    duration: settings.duration,
    easing: settings.easing,
    offset: "-=400"
  })
  .add({
    targets: '.fade-after p',
    translateY: [-100, 0],
    opacity: settings.opacity,
    duration: settings.duration,
    easing: settings.easing,
    offset: "+=400"
  })
  .add({
    targets: '.fade-later',
    translateY: [-100, 0],
    opacity: settings.opacity,
    duration: settings.duration,
    easing: settings.easing,
    offset: "+=400"
});