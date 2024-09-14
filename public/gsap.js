var t1 = gsap.timeline();
t1.from(".header-top .container .input-wrapper", {
  y: -20,
  opacity: 0,
  delay:0.3,
  duration: 1,
});
t1.from(".header-top .container .logo", {
  y: -20,
  opacity: 0,

  duration: 0.5,
  stagger: 0.3,
});

t1.from(".header-top .container .header-actions", {
  y: -20,
  opacity: 0,

  duration: 0.5,
  stagger: 0.3,
});

t1.from(".alert", {
    y: -20,
    opacity: 0,
    duration: 0.5,
  });