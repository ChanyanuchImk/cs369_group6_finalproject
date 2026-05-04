// ── Toast Notification (shared) ──
export function showToast(message) {
  const old = document.getElementById('tu-toast');
  if (old) old.remove();

  const toast = document.createElement('div');
  toast.id = 'tu-toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    background: #c89020;
    color: #fff;
    padding: 12px 28px;
    border-radius: 8px;
    font-family: 'Sarabun', sans-serif;
    font-size: 0.95rem;
    font-weight: 600;
    box-shadow: 0 4px 16px rgba(0,0,0,0.3);
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.3s ease;
  `;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity = '1';
  });

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 1500);
}