function initTutles() {
  let old_log = window.console.log;
  window.console.log = (...args) => {
    old_log("🐢", ...args);
  }
}
