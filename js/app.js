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

  container.innerHTML = html;

  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Attach global render hook
window.renderApp = renderApp;

// Initial render on load
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});
