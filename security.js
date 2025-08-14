
// test-alert.js
(function () {
  if (window.__TG_ALERT_SHOWN__) return; // avoid double alerts if enqueued twice
  window.__TG_ALERT_SHOWN__ = true;

  // Wait for DOM ready so it reliably fires whether loaded in head or footer
  window.addEventListener('DOMContentLoaded', function () {
    alert('External script loaded from GitHub via jsDelivr ✅');
    console.log('Test alert script ran.');
  });
})();
