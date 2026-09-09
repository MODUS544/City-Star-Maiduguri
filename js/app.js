/**
 * Application Main Controller
 */

function updateNavHighlight(activeMode) {
  const modes = ['mobile', 'hotel', 'kitchen', 'scanner', 'admin'];
  modes.forEach(m => {
    const btn = document.getElementById(`btn-mode-${m}`);
    if (btn) {
      if (m === activeMode) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }
  });
}

function renderApp() {
  const container = document.getElementById('app-container');
  if (!container) return;

  const mode = appStore.currentMode;
  updateNavHighlight(mode);

  let html = '';

  try {
    switch (mode) {
      case 'mobile':
        html = renderMobileShell();
        break;
      case 'hotel':
        html = renderHotelFrontDeskDashboard();
        break;
      case 'kitchen':
        html = renderKitchenKDSDashboard();
        break;
      case 'scanner':
        html = renderPoolGymScannerDashboard();
        break;
      case 'admin':
        html = renderSuperAdminDashboard();
        break;
      default:
        html = renderMobileShell();
    }
  } catch (err) {
    console.error('Error rendering module:', err);
    html = `<div class="p-8 text-center text-red-400">Rendering Error: ${err.message}</div>`;
  }

  container.innerHTML = html;

  // Initialize Lucide Icons safely
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    try {
      window.lucide.createIcons();
    } catch (iconErr) {
      console.warn('Lucide icon warning:', iconErr);
    }
  }
}

// Attach global render hook
window.renderApp = renderApp;

// Initial render on DOM load
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});
