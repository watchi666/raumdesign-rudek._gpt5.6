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
  const heroProjects = [...(heroShowcase?.querySelectorAll('[data-hero-project]') || [])];
  const heroPrev = heroShowcase?.querySelector('[data-hero-prev]');
  const heroNext = heroShowcase?.querySelector('[data-hero-next]');
  const heroCurrent = heroShowcase?.querySelector('[data-hero-current]');
  const heroStatus = heroShowcase?.querySelector('[data-hero-status]');
  const heroTransformation = heroShowcase?.querySelector('[data-hero-transformation]');
  const heroBefore = heroShowcase?.querySelector('[data-hero-before]');
  const heroAfter = heroShowcase?.querySelector('[data-hero-after]');
  const heroTransformTitle = heroShowcase?.querySelector('[data-hero-transform-title]');
  const heroTransformStatus = heroShowcase?.querySelector('[data-hero-transform-status]');
  const heroClose = heroShowcase?.querySelector('[data-hero-close]');
  const heroReplay = heroShowcase?.querySelector('[data-hero-replay]');

  if (heroShowcase && heroOrbit && heroTrack && heroProjects.length && heroTransformation) {
    let activeProject = 0;
    let dragStart = null;
    let dragDistance = 0;
    let suppressProjectClick = false;
    let revealTimers = [];

    const clearRevealTimers = () => {
      revealTimers.forEach((timer) => window.clearTimeout(timer));
      revealTimers = [];
    };

    const projectOffset = (index) => {
      let offset = index - activeProject;
      const midpoint = heroProjects.length / 2;
      if (offset > midpoint) offset -= heroProjects.length;
      if (offset < -midpoint) offset += heroProjects.length;
      return offset;
    };

    const renderHeroOrbit = (announce = false) => {
      heroProjects.forEach((project, index) => {
        const offset = projectOffset(index);
        const distance = Math.abs(offset);
        const active = offset === 0;
        project.style.setProperty('--x', `${offset * 72}%`);
        project.style.setProperty('--z', active ? '42px' : `${-130 - ((distance - 1) * 70)}px`);
        project.style.setProperty('--ry', `${offset * -24}deg`);
        project.style.setProperty('--scale', active ? '1' : String(Math.max(.62, .78 - ((distance - 1) * .12))));
        project.style.setProperty('--card-opacity', active ? '1' : String(Math.max(.42, .72 - ((distance - 1) * .18))));
        project.style.setProperty('--layer', active ? '6' : String(Math.max(1, 4 - distance)));
        project.dataset.active = String(active);
        project.tabIndex = active ? 0 : -1;
        project.setAttribute('aria-current', active ? 'true' : 'false');
      });

      const selected = heroProjects[activeProject];
      if (heroCurrent) heroCurrent.textContent = String(activeProject + 1);
      if (heroStatus && announce) {
        heroStatus.textContent = `Projekt ${activeProject + 1} von ${heroProjects.length}: ${selected.dataset.title}`;
      }
    };

    const selectHeroProject = (index, focus = false) => {
      activeProject = (index + heroProjects.length) % heroProjects.length;
      renderHeroOrbit(true);
      if (focus) heroProjects[activeProject].focus({ preventScroll: true });
    };

    const runHeroTransformation = (introDelay = 1000) => {
      clearRevealTimers();
      heroTransformation.classList.remove('is-revealing', 'is-complete');
      if (heroTransformStatus) heroTransformStatus.textContent = 'Ausgangszustand wird gezeigt.';

      if (reducedMotion) {
        heroTransformation.classList.add('is-complete');
        if (heroTransformStatus) heroTransformStatus.textContent = 'Gestaltete Oberfläche wird gezeigt.';
        return;
      }

      revealTimers.push(window.setTimeout(() => {
        heroTransformation.classList.add('is-revealing');
        if (heroTransformStatus) heroTransformStatus.textContent = 'Ein Lichtstreifen legt die gestaltete Oberfläche frei.';
      }, introDelay));
      revealTimers.push(window.setTimeout(() => {
        heroTransformation.classList.add('is-complete');
        if (heroTransformStatus) heroTransformStatus.textContent = 'Gestaltete Oberfläche vollständig sichtbar.';
      }, introDelay + 1400));
    };

    const openHeroTransformation = () => {
      const selected = heroProjects[activeProject];
      if (!heroBefore || !heroAfter || !heroTransformTitle) return;
      heroBefore.src = selected.dataset.before;
      heroAfter.src = selected.dataset.after;
      heroBefore.alt = `Ausgangsaufnahme für ${selected.dataset.title}`;
      heroAfter.alt = `Gestaltete Aufnahme für ${selected.dataset.title}`;
      heroTransformTitle.textContent = selected.dataset.title;
      heroTransformation.hidden = false;
      heroOrbit.setAttribute('aria-hidden', 'true');
      heroClose?.focus({ preventScroll: true });
      runHeroTransformation();
    };

    const closeHeroTransformation = () => {
      clearRevealTimers();
      heroTransformation.hidden = true;
      heroTransformation.classList.remove('is-revealing', 'is-complete');
      heroOrbit.removeAttribute('aria-hidden');
      heroProjects[activeProject].focus({ preventScroll: true });
    };

    heroProjects.forEach((project, index) => {
      project.addEventListener('click', () => {
        if (suppressProjectClick) return;
        if (index !== activeProject) {
          selectHeroProject(index, true);
          return;
        }
        openHeroTransformation();
      });
    });

    heroPrev?.addEventListener('click', () => selectHeroProject(activeProject - 1, true));
    heroNext?.addEventListener('click', () => selectHeroProject(activeProject + 1, true));
    heroClose?.addEventListener('click', closeHeroTransformation);
    heroReplay?.addEventListener('click', () => runHeroTransformation(300));

    heroTrack.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        selectHeroProject(activeProject - 1, true);
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        selectHeroProject(activeProject + 1, true);
      }
    });

    heroTrack.addEventListener('pointerdown', (event) => {
      dragStart = event.clientX;
      dragDistance = 0;
      heroTrack.classList.add('is-dragging');
      heroTrack.setPointerCapture?.(event.pointerId);
    });
    heroTrack.addEventListener('pointermove', (event) => {
      if (dragStart === null) return;
      dragDistance = event.clientX - dragStart;
    });
    const finishHeroDrag = (event) => {
      if (dragStart === null) return;
      heroTrack.classList.remove('is-dragging');
      heroTrack.releasePointerCapture?.(event.pointerId);
      if (Math.abs(dragDistance) > 36) {
        suppressProjectClick = true;
        selectHeroProject(activeProject + (dragDistance < 0 ? 1 : -1));
        window.setTimeout(() => { suppressProjectClick = false; }, 0);
      }
      dragStart = null;
      dragDistance = 0;
    };
    heroTrack.addEventListener('pointerup', finishHeroDrag);
    heroTrack.addEventListener('pointercancel', finishHeroDrag);

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !heroTransformation.hidden) closeHeroTransformation();
    });

    renderHeroOrbit();
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
