/* =====[preloader first try]=====*/
// export default function preload() {
//   let now = performance.now();
//   console.log(now);
//   window.onload = () => {
//     let hid = document.querySelector(".hide");
//     setInterval(() => {
//       if (now) {
//         // hid.style.display = "none";
//         // hid.classList.remove('hide')
//         hid.classList.add("hide-fade");
//       }
//     }, now);
//   };
// }

/* =====[preloader second try]=====*/
export default function preload() {
  /* =====[preloader elements]=====*/
  let preloadBg = document.createElement("div");
  preloadBg.className = "hide";
  let preloadBox = document.createElement("div");
  preloadBox.className = "preloadBox";

  preloadBg.append(preloadBox);
  document.body.append(preloadBg);

  /* =====[preloader time]=====*/
  // let now = performance.now() * 39;
  let now = 5000;
  document.documentElement.style.setProperty("--preload_now", `${now}ms`);
  let hid = document.querySelector(".hide");

  // console.log(now);
  // window.addEventListener("load", () => {
  //   setInterval(() => {
  //     if (now) {
  //       hid.classList.add("hide-fade");
  //     }
  //   }, now);
  // });

  /* =====[preloader function]=====*/
  window.onload = () => {
    preloadBg.classList.add("hide-fade");
    preloadBox.classList.add("hid-box")

  };
}
