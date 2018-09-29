if ('serviceWorker' in navigator) {

  navigator.serviceWorker
  .register('./sw.js', { scope: './' })
  .then(function (registration) {
    // success
    console.log("Registration worked!", registration.scope);
  })
  .catch(function (error) {
    // fail
    console.log("ERROR! Registration failed", error);
  })
}
