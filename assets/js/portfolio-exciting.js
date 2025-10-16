// Exciting Portfolio JavaScript Effects

document.addEventListener('DOMContentLoaded', function() {
  // Create floating action button
  createFloatingActionButton();

  // Create progress bar
  createProgressBar();

  // Add scroll-triggered animations
  setupScrollAnimations();

  // Add particle effects
  createPortfolioParticles();

  // Setup scroll progress tracking
  setupScrollProgress();
});

// Cleanup on page unload
window.addEventListener('beforeunload', cleanupPortfolioParticles);
window.addEventListener('pagehide', cleanupPortfolioParticles);

function createFloatingActionButton() {
  const floatingAction = document.createElement('div');
  floatingAction.className = 'portfolio-floating-action';
  floatingAction.innerHTML = `
    <button onclick="scrollToTop()" title="Back to top">
      ↑
    </button>
  `;
  document.body.appendChild(floatingAction);

  // Show/hide based on scroll position
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      floatingAction.classList.add('visible');
    } else {
      floatingAction.classList.remove('visible');
    }
  });
}

function createProgressBar() {
  const progressBar = document.createElement('div');
  progressBar.className = 'portfolio-progress-bar';
  document.body.appendChild(progressBar);
}

function setupScrollProgress() {
  const progressBar = document.querySelector('.portfolio-progress-bar');

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    if (progressBar) {
      progressBar.style.width = scrollPercent + '%';
    }
  });
}

function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe portfolio content elements
  const elementsToAnimate = document.querySelectorAll(
    '.portfolio-subpage-content, .project-meta, .portfolio-subpage-content p, .portfolio-subpage-content h2, .portfolio-subpage-content h3'
  );

  elementsToAnimate.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
  });
}

// Portfolio particle system with proper cleanup
let portfolioParticleInterval;
let activePortfolioParticles = new Set();

function createPortfolioParticles() {
  function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '3px';
    particle.style.height = '3px';
    particle.style.background = `hsl(${Math.random() * 60 + 180}, 70%, 60%)`;
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = '100vh';
    particle.style.animation = `portfolioFloatParticle ${Math.random() * 15 + 10}s linear forwards`;

    document.body.appendChild(particle);
    activePortfolioParticles.add(particle);

    // Remove particle after animation
    const animationDuration = (Math.random() * 15 + 10) * 1000;
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
        activePortfolioParticles.delete(particle);
      }
    }, animationDuration);
  }

  // Create particles periodically (reduced frequency)
  portfolioParticleInterval = setInterval(createParticle, 4000);

  // Add CSS animation for particles
  const style = document.createElement('style');
  style.id = 'portfolio-particle-styles';
  style.textContent = `
    @keyframes portfolioFloatParticle {
      0% {
        transform: translateY(100vh) translateX(0) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateY(-100px) translateX(${Math.random() * 200 - 100}px) rotate(360deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

function cleanupPortfolioParticles() {
  // Clear the interval
  if (portfolioParticleInterval) {
    clearInterval(portfolioParticleInterval);
    portfolioParticleInterval = null;
  }
  
  // Remove all active particles
  activePortfolioParticles.forEach(particle => {
    if (particle.parentNode) {
      particle.parentNode.removeChild(particle);
    }
  });
  activePortfolioParticles.clear();
  
  // Remove the CSS styles
  const styleElement = document.getElementById('portfolio-particle-styles');
  if (styleElement) {
    styleElement.remove();
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Add hover effects to project meta elements
document.addEventListener('DOMContentLoaded', function() {
  const projectMeta = document.querySelector('.project-meta');
  if (projectMeta) {
    projectMeta.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px) scale(1.02)';
    });

    projectMeta.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  }
});

