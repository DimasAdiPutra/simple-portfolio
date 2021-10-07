// mengambil toogle button
const btnToggle = document.getElementsByClassName('toggle')[0];

btnToggle.addEventListener('click', function () {
  // memberikan class active untuk menu toggle
  this.classList.toggle('active');
  // memberikan class on untuk navlinks
  this.previousElementSibling.classList.toggle('on');
});