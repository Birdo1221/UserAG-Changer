let isActive = false; // Start with protection off
let currentUserAgent = null;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ isActive });
});

chrome.action.onClicked.addListener(() => {
  isActive = !isActive;
  chrome.storage.sync.set({ isActive });
  chrome.action.setBadgeText({ text: isActive ? "ON" : "OFF" });

  if (isActive) {
    chrome.webRequest.onBeforeSendHeaders.addListener(
      modifyUserAgent,
      { urls: ["<all_urls>"] },
      ["blocking", "requestHeaders"]
    );
  } else {
    chrome.webRequest.onBeforeSendHeaders.removeListener(modifyUserAgent);
  }
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.isActive) {
    isActive = changes.isActive.newValue;
    chrome.action.setBadgeText({ text: isActive ? "ON" : "OFF" });

    if (isActive) {
      chrome.webRequest.onBeforeSendHeaders.addListener(
        modifyUserAgent,
        { urls: ["<all_urls>"] },
        ["blocking", "requestHeaders"]
      );
    } else {
      chrome.webRequest.onBeforeSendHeaders.removeListener(modifyUserAgent);
    }
  }

  if (changes.userAgent) {
    currentUserAgent = changes.userAgent.newValue;
    clearCacheAndRefresh(); // Clear cache and refresh on user-agent change
  }
});

// Function to modify user-agent header
function modifyUserAgent(details) {
  if (!currentUserAgent) return;

  let headers = details.requestHeaders;
  for (let i = 0; i < headers.length; i++) {
    if (headers[i].name.toLowerCase() === 'user-agent') {
      headers[i].value = currentUserAgent;
      break;
    }
  }

  return { requestHeaders: headers };
}

// Clear cache and refresh the active tab
function clearCacheAndRefresh() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]) {
      chrome.browsingData.removeCache({}, () => {
        chrome.tabs.reload(tabs[0].id);
      });
    }
  });
}

// Ensure the user-agent remains consistent
chrome.webRequest.onBeforeSendHeaders.addListener(
  (details) => {
    if (currentUserAgent) {
      details.requestHeaders.forEach((header) => {
        if (header.name.toLowerCase() === 'user-agent') {
          header.value = currentUserAgent;
        }
      });
    }
    return { requestHeaders: details.requestHeaders };
  },
  { urls: ["<all_urls>"] },
  ["blocking", "requestHeaders"]
);
