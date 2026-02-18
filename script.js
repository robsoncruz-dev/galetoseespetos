/* ============================================================
   GALETERIA "RECANTO DA SUSTENTA" — Landing Page
   JavaScript — Interatividade (Vanilla JS)
   ============================================================ */

(() => {
  'use strict';

  // ============================================================
  // 1. THEME TOGGLE (Dark/Light) com localStorage
  // ============================================================
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Carregar tema salvo ou default (dark)
  const savedTheme = localStorage.getItem('rs-theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('rs-theme', next);
    updateThemeIcon(next);
  });

  function updateThemeIcon(theme) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    themeToggle.setAttribute('aria-label', 
      theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'
    );
  }

  // ============================================================
  // 2. HEADER SCROLL EFFECT (Blur on scroll)
  // ============================================================
  const header = document.getElementById('header');
  let lastScroll = 0;

  function handleHeaderScroll() {
    const scrollY = window.scrollY;
    
    if (scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = scrollY;
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });

  // ============================================================
  // 3. MOBILE MENU TOGGLE
  // ============================================================
  const menuToggle = document.getElementById('menu-toggle');
  const navMobile = document.getElementById('nav-mobile');
  let menuOpen = false;

  menuToggle.addEventListener('click', () => {
    menuOpen = !menuOpen;
    navMobile.classList.toggle('open', menuOpen);
    menuToggle.textContent = menuOpen ? '✕' : '☰';
    menuToggle.setAttribute('aria-label', 
      menuOpen ? 'Fechar menu' : 'Abrir menu'
    );
  });

  // Fechar menu ao clicar em link
  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuOpen = false;
      navMobile.classList.remove('open');
      menuToggle.textContent = '☰';
    });
  });

  // ============================================================
  // 4. REVEAL ANIMATIONS (IntersectionObserver)
  // ============================================================
  const revealElements = document.querySelectorAll('.reveal');
  
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback: show all elements immediately
    revealElements.forEach(el => el.classList.add('visible'));
  }

  // ============================================================
  // 5. PROMO CODE — Copy to Clipboard
  // ============================================================
  const promoCode = document.getElementById('promo-code');
  
  if (promoCode) {
    promoCode.addEventListener('click', async () => {
      const code = promoCode.textContent.trim();
      
      try {
        await navigator.clipboard.writeText(code);
        const original = promoCode.textContent;
        promoCode.textContent = '✅ Copiado!';
        promoCode.style.borderColor = '#25D366';
        
        setTimeout(() => {
          promoCode.textContent = original;
          promoCode.style.borderColor = '';
        }, 2000);
      } catch (err) {
        // Fallback para navegadores sem Clipboard API
        const textarea = document.createElement('textarea');
        textarea.value = code;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        
        try {
          document.execCommand('copy');
          promoCode.textContent = '✅ Copiado!';
          setTimeout(() => {
            promoCode.textContent = code;
          }, 2000);
        } catch (e) {
          console.warn('Não foi possível copiar o código');
        }
        
        document.body.removeChild(textarea);
      }
    });
  }

  // ============================================================
  // 6. SMOOTH SCROLL (Enhancement for older browsers)
  // ============================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = parseInt(getComputedStyle(document.documentElement)
          .getPropertyValue('--header-height')) || 70;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ============================================================
  // 7. LAZY STAGGER ANIMATION for grid items
  // ============================================================
  const staggerContainers = document.querySelectorAll('.features-grid, .menu-grid');
  
  staggerContainers.forEach(container => {
    const items = container.querySelectorAll('.reveal');
    items.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.1}s`;
    });
  });

})();
