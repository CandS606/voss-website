document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('nav.wrap ul');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
  }

  document.querySelectorAll('.capability-request').forEach(function (link) {
    link.addEventListener('click', function () {
      if (typeof gtag === 'function') {
        gtag('event', 'capability_statement_open', {
          page_path: window.location.pathname,
          document_version: 'v1.3',
          transport_type: 'beacon'
        });
      }
    });
  });
});
