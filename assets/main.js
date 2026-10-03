document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('nav.wrap ul');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
  }

  document.querySelectorAll('.capability-request').forEach(function (link) {
    link.addEventListener('click', function (event) {
      var destination = link.getAttribute('href');
      var opened = false;

      function openEmail() {
        if (opened) return;
        opened = true;
        window.location.href = destination;
      }

      event.preventDefault();

      if (typeof gtag === 'function') {
        gtag('event', 'capability_statement_request_click', {
          page_path: window.location.pathname,
          transport_type: 'beacon',
          event_callback: openEmail,
          event_timeout: 1000
        });

        window.setTimeout(openEmail, 450);
      } else {
        openEmail();
      }
    });
  });
});
