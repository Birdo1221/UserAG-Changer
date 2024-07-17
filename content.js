chrome.storage.sync.get("isActive", ({ isActive }) => {
    if (isActive && window.self !== window.top) {
      window.top.location = window.location;
    }
  });
  