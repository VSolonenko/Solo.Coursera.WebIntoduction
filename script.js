    // Toggle Menu
    const toggleButton = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    toggleButton.addEventListener('click', () => navMenu.classList.toggle('active'));

    // Smooth Scroll
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Filter Projects
    function filterProjects(category) {
      const projects = document.querySelectorAll('#projects article');
      projects.forEach(project => {
        project.style.display = (category === 'all' || project.dataset.category === category) ? 'block' : 'none';
      });
    }

    // Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('img');
    document.querySelectorAll('#projects img').forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
      });
    });

    // Form Validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      let errors = [];

      if (!name) errors.push('Name is required.');
      if (!email || !email.includes('@')) errors.push('Valid email is required.');
      if (!message) errors.push('Message cannot be empty.');

      if (errors.length) {
        alert(errors.join('\n'));
      } else {
        alert('Message sent!');
        form.reset();
      }
    });