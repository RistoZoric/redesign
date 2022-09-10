document.addEventListener('visibilitychange', function () {
    var t;
    if (document.hidden) {
      function logout(){
        window.location.href = 'file:///Users/zit-14/Documents/react/redesign/pages/authentication/lock/basic.html';
      }
      t = setTimeout(logout, 300000);
    } else {
        clearTimeout(t);
    }
});
