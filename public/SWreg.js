const registerServiceWorker = async () => {
    if (navigator.serviceWorker) {
      try {
       await navigator.serviceWorker.register("/SW.js", {
          scope: "/",
        });
      } catch (error) {
        console.error(`Registration failed with ${error}`);
      }
    }
  };
  
  // …
  
  registerServiceWorker();
  