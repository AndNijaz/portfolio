// var typed = new Typed("#heading-primary", {
//   strings: ["Nijaz Andelić"],
//   typeSpeed: 50,
// });
// var typed = new Typed("#subheading", {
//   strings: [
//     "SOFTWARE ENGINEER & FRONTEND ^1000 DEVELOPER ^1000",
//     "REACT",
//     "REACT NATIVE",
//     "JAVASCRIPT",
//     "TYPESCRIPT",
//     "MYSQL",
//     "PHP",
//   ],
//   typeSpeed: 50,
// });
// var typed = new Typed("#element", {
//   strings: ["<i>Nijaz</i> Andelić.", "&amp; a second sentence."],
//   typeSpeed: 50,
// });

// var typed = new Typed("#typed", {
//   stringsElement: "#typed-strings",
//   typeSpeed: 0,
//   backSpeed: 0,
//   backDelay: 500,
//   startDelay: 1000,
//   loop: false,
//   onBegin: function (self) {
//     prettyLog("onBegin " + self);
//   },
//   onComplete: function (self) {
//     prettyLog("onCmplete " + self);
//   },
//   preStringTyped: function (pos, self) {
//     prettyLog("preStringTyped " + pos + " " + self);
//   },
//   onStringTyped: function (pos, self) {
//     prettyLog("onStringTyped " + pos + " " + self);
//   },
//   onLastStringBackspaced: function (self) {
//     prettyLog("onLastStringBackspaced " + self);
//   },
//   onTypingPaused: function (pos, self) {
//     prettyLog("onTypingPaused " + pos + " " + self);
//   },
//   onTypingResumed: function (pos, self) {
//     prettyLog("onTypingResumed " + pos + " " + self);
//   },
//   onReset: function (self) {
//     prettyLog("onReset " + self);
//   },
//   onStop: function (pos, self) {
//     prettyLog("onStop " + pos + " " + self);
//   },
//   onStart: function (pos, self) {
//     prettyLog("onStart " + pos + " " + self);
//   },
//   onDestroy: function (self) {
//     prettyLog("onDestroy " + self);
//   },
// });

var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  loop: true,
  typeSpeed: 50,
});
