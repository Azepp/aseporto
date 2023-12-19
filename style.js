var typed = new Typed(".typing", {
  strings: ["Zidane Athallah"],
    typeSpeed: 80,
    showCursor: false,
});

var typed = new Typed(".ketik", {
  strings: ["Front End Developer"],
  typeSpeed: 80,
  showCursor: false,
});

var typed = new Typed(".write", {
  strings: ["UI/UX Designer"],
  typeSpeed: 80,
  showCursor: false,
});

var typed = new Typed(".ketik-desk", {
  strings: ["Front End Developer"],
  typeSpeed: 80,
  showCursor: false,
});

var typed = new Typed(".write-desk", {
  strings: ["UI/UX Designer"],
  typeSpeed: 80,
  showCursor: false,
});

function clearInputs() {
  setTimeout(function () {
    document.getElementById("nameInput").value = ""; // Menghapus nilai input setelah submit
    document.getElementById("emailInput").value = ""; // Menghapus nilai input setelah submit
    document.getElementById("designInput").checked = false; // Menghapus nilai input setelah submit
    document.getElementById("devInput").checked = false; // Menghapus nilai input setelah submit
    document.getElementById("otherInput").checked = false; // Menghapus nilai input setelah submit
    document.getElementById("messInput").value = ""; // Menghapus nilai input setelah submit
  }, 0);
}

  // Ambil tombol toggle navbar
  var navbarToggleBtn = document.getElementById('navbarToggleBtn');

  // Ambil semua link menu dalam navbar
  var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  // Ambil elemen navbar-collapse
  var navbarCollapse = document.getElementById('navbarSupportedContent');

  // Tambahkan event listener untuk setiap link menu
  navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function() {
      // Cek lebar layar
      var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

      // Tutup navbar jika lebar layar kurang dari 992px (ukuran desktop)
      if (windowWidth < 992) {
        var bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();

        // Atur kembali atribut 'aria-expanded' menjadi 'false'
        navbarToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });




