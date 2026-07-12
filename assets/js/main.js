(() => {
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('#mobile-menu');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const closeMenu = () => {
    if (!menuButton || !mobileMenu) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Menü öffnen');
    mobileMenu.hidden = true;
    document.body.classList.remove('menu-open');
  };

  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menuButton.setAttribute('aria-label', open ? 'Menü öffnen' : 'Menü schließen');
    mobileMenu.hidden = open;
    document.body.classList.toggle('menu-open', !open);
  });

  mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) closeMenu();
  });

  const revealItems = document.querySelectorAll('[data-reveal]');
  if (reducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });
    revealItems.forEach((item) => revealObserver.observe(item));
  }

  const heroShowcase = document.querySelector('[data-hero-showcase]');
  const heroOrbit = heroShowcase?.querySelector('[data-hero-orbit]');
  const heroTrack = heroShowcase?.querySelector('[data-hero-track]');
  const heroCylinder = heroShowcase?.querySelector('[data-hero-cylinder]');
  const heroProjects = [...(heroShowcase?.querySelectorAll('[data-hero-project]') || [])];
  const heroPrev = heroShowcase?.querySelector('[data-hero-prev]');
  const heroNext = heroShowcase?.querySelector('[data-hero-next]');
  const heroCurrent = heroShowcase?.querySelector('[data-hero-current]');
  const heroScrubber = heroShowcase?.querySelector('[data-hero-scrubber]');
  const heroStatus = heroShowcase?.querySelector('[data-hero-status]');
  const heroFocus = heroShowcase?.querySelector('[data-hero-focus]');
  const heroFocusImage = heroShowcase?.querySelector('[data-hero-focus-image]');
  const heroFocusTitle = heroShowcase?.querySelector('[data-hero-focus-title]');
  const heroFocusIndex = heroShowcase?.querySelector('[data-hero-focus-index]');
  const heroFocusStatus = heroShowcase?.querySelector('[data-hero-focus-status]');
  const heroClose = heroShowcase?.querySelector('[data-hero-close]');

  if (heroShowcase && heroOrbit && heroTrack && heroCylinder && heroProjects.length && heroFocus) {
    const projectCount = heroProjects.length;
    const angleStep = 360 / projectCount;
    const autoSpeed = 360 / 90000;
    let activeProject = 0;
    let currentRotation = 0;
    let targetRotation = 0;
    let previousFrame = performance.now();
    let dragStartX = null;
    let dragStartRotation = 0;
    let suppressProjectClick = false;
    let lastInteraction = 0;
    let focusOpen = false;

    const normalizeAngle = (angle) => {
      return ((angle + 180) % 360 + 360) % 360 - 180;
    };

    const syncActiveProject = (announce = false) => {
      const nextActive = ((Math.round(-targetRotation / angleStep) % projectCount) + projectCount) % projectCount;
      if (nextActive === activeProject && !announce) return;
      activeProject = nextActive;

      heroProjects.forEach((project, index) => {
        const active = index === activeProject;
        project.dataset.active = String(active);
        project.tabIndex = active ? 0 : -1;
        project.setAttribute('aria-current', active ? 'true' : 'false');
      });

      const selected = heroProjects[activeProject];
      if (heroCurrent) heroCurrent.textContent = String(activeProject + 1);
      if (heroStatus && announce) {
        heroStatus.textContent = `Projekt ${activeProject + 1} von ${projectCount}: ${selected.dataset.title}`;
      }
    };

    const turnToProject = (index, focus = false) => {
      const boundedIndex = (index + projectCount) % projectCount;
      const desiredRotation = -boundedIndex * angleStep;
      targetRotation = currentRotation + normalizeAngle(desiredRotation - currentRotation);
      lastInteraction = performance.now();
      activeProject = boundedIndex;
      syncActiveProject(true);
      if (focus) heroProjects[boundedIndex].focus({ preventScroll: true });
    };

    const renderCylinder = (now) => {
      const frameTime = Math.min(34, now - previousFrame);
      previousFrame = now;

      if (!reducedMotion && !focusOpen && dragStartX === null && now - lastInteraction > 1400) {
        targetRotation -= frameTime * autoSpeed;
      }

      if (dragStartX === null) {
        currentRotation += (targetRotation - currentRotation) * Math.min(1, frameTime * .012);
      }

      if (Math.abs(currentRotation) > 3600 && Math.abs(targetRotation) > 3600) {
        const turns = Math.trunc(currentRotation / 360) * 360;
        currentRotation -= turns;
        targetRotation -= turns;
      }

      heroCylinder.style.setProperty('--rotation', `${currentRotation.toFixed(3)}deg`);
      if (heroScrubber && document.activeElement !== heroScrubber) {
        heroScrubber.value = String(Math.round(((-currentRotation % 360) + 360) % 360));
      }
      syncActiveProject();
      window.requestAnimationFrame(renderCylinder);
    };

    const openHeroFocus = (index) => {
      const selected = heroProjects[index];
      const selectedImage = selected.querySelector('img');
      if (!selectedImage || !heroFocusImage || !heroFocusTitle) return;
      activeProject = index;
      focusOpen = true;
      heroFocusImage.src = selectedImage.currentSrc || selectedImage.src;
      heroFocusImage.alt = selectedImage.alt;
      heroFocusTitle.textContent = selected.dataset.title;
      if (heroFocusIndex) heroFocusIndex.textContent = `${String(index + 1).padStart(2, '0')} / ${projectCount}`;
      if (heroFocusStatus) heroFocusStatus.textContent = `${selected.dataset.title} ist groß im Vordergrund geöffnet.`;
      heroShowcase.classList.add('is-focusing');
      heroFocus.hidden = false;
      heroOrbit.setAttribute('aria-hidden', 'true');
      heroOrbit.inert = true;
      heroClose?.focus({ preventScroll: true });
    };

    const closeHeroFocus = () => {
      focusOpen = false;
      heroFocus.hidden = true;
      heroShowcase.classList.remove('is-focusing');
      heroOrbit.removeAttribute('aria-hidden');
      heroOrbit.inert = false;
      lastInteraction = performance.now();
      heroProjects[activeProject].focus({ preventScroll: true });
    };

    heroProjects.forEach((project, index) => {
      project.style.setProperty('--angle', `${index * angleStep}deg`);
    });

    heroProjects.forEach((project, index) => {
      project.addEventListener('click', () => {
        if (suppressProjectClick) return;
        turnToProject(index);
        openHeroFocus(index);
      });
    });

    heroPrev?.addEventListener('click', () => turnToProject(activeProject - 1, true));
    heroNext?.addEventListener('click', () => turnToProject(activeProject + 1, true));
    heroClose?.addEventListener('click', closeHeroFocus);

    heroScrubber?.addEventListener('input', () => {
      const desiredRotation = -Number(heroScrubber.value);
      targetRotation = currentRotation + normalizeAngle(desiredRotation - currentRotation);
      lastInteraction = performance.now();
    });
    heroScrubber?.addEventListener('change', () => syncActiveProject(true));

    heroTrack.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        turnToProject(activeProject - 1, true);
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        turnToProject(activeProject + 1, true);
      }
    });

    heroTrack.addEventListener('pointerdown', (event) => {
      if (focusOpen) return;
      dragStartX = event.clientX;
      dragStartRotation = currentRotation;
      suppressProjectClick = false;
      heroTrack.classList.add('is-dragging');
      heroTrack.setPointerCapture?.(event.pointerId);
    });
    heroTrack.addEventListener('pointermove', (event) => {
      if (dragStartX === null) return;
      const distance = event.clientX - dragStartX;
      if (Math.abs(distance) > 6) suppressProjectClick = true;
      currentRotation = dragStartRotation + distance * .28;
      targetRotation = currentRotation;
      lastInteraction = performance.now();
    });
    const finishHeroDrag = (event) => {
      if (dragStartX === null) return;
      heroTrack.classList.remove('is-dragging');
      heroTrack.releasePointerCapture?.(event.pointerId);
      dragStartX = null;
      syncActiveProject(true);
      window.setTimeout(() => { suppressProjectClick = false; }, 0);
    };
    heroTrack.addEventListener('pointerup', finishHeroDrag);
    heroTrack.addEventListener('pointercancel', finishHeroDrag);

    heroTrack.addEventListener('wheel', (event) => {
      if (focusOpen) return;
      event.preventDefault();
      const movement = Math.abs(event.deltaY) > Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
      targetRotation -= movement * .12;
      lastInteraction = performance.now();
    }, { passive: false });

    heroFocus.addEventListener('click', (event) => {
      if (event.target === heroFocus) closeHeroFocus();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && focusOpen) closeHeroFocus();
    });

    syncActiveProject(true);
    window.requestAnimationFrame(renderCylinder);
  }

  const lightbox = document.querySelector('#lightbox');
  const lightboxImage = lightbox?.querySelector('img');
  const lightboxCaption = lightbox?.querySelector('p');
  const lightboxClose = lightbox?.querySelector('.lightbox-close');

  document.querySelectorAll('[data-lightbox]').forEach((project) => {
    project.addEventListener('click', () => {
      if (!lightbox || !lightboxImage || !lightboxCaption) return;
      lightboxImage.src = project.dataset.lightbox;
      lightboxImage.alt = project.querySelector('img')?.alt || 'Projekt von RaumDesign Rudek';
      lightboxCaption.textContent = project.dataset.caption || '';
      lightbox.showModal();
    });
  });

  lightboxClose?.addEventListener('click', () => lightbox?.close());
  lightbox?.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });

  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#form-status');
  const fallback = document.querySelector('#form-fallback');

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const fields = [...form.querySelectorAll('input, textarea')];
    fields.forEach((field) => field.removeAttribute('aria-invalid'));

    if (!form.checkValidity()) {
      fields.filter((field) => !field.checkValidity()).forEach((field) => field.setAttribute('aria-invalid', 'true'));
      form.reportValidity();
      if (status) status.textContent = 'Bitte füllen Sie die markierten Pflichtfelder aus.';
      return;
    }

    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    const subject = `Projektanfrage von ${name}`;
    const body = [
      `Guten Tag Herr Rudek,`,
      '',
      message,
      '',
      `Name: ${name}`,
      `E-Mail: ${email}`,
      `Telefon: ${phone || 'nicht angegeben'}`
    ].join('\n');
    const mailto = `mailto:raumdesign-rudek@t-online.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    if (fallback) fallback.href = mailto;
    if (status) status.textContent = 'Ihr E-Mail-Programm wird geöffnet. Falls nichts passiert, nutzen Sie den Link darunter.';
    window.location.href = mailto;
  });

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
})();
