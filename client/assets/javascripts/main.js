import '../../components/Navbar.js'
import '../../components/SearchMenu.js'
import '../../components/ProgressBar.js'
window.onscroll = function () { onScrolling() };
function onScrolling() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


