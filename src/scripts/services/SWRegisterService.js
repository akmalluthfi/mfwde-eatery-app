const SWRegister = async () => {
  if ('serviceWorker' in navigator) {
    const { Workbox } = await import('workbox-window');

    try {
      const wb = new Workbox('/sw.js');
      await wb.register();
    } catch (error) {
      console.error('Failed to register service worker', error);
    }
  } else {
    console.error('Service Worker not supported in the browser');
  }
};

export default SWRegister;
