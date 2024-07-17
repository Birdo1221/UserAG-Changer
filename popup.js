const toggle = document.getElementById("toggle");
const status = document.getElementById("status");
const userAgentSelect = document.getElementById("userAgentSelect");
const customAgentInput = document.getElementById("customAgent");
const confirmButton = document.getElementById("confirmButton");
const infoButton = document.getElementById("infoButton");
const modal = document.getElementById("infoModal");
const closeModal = document.getElementsByClassName("close")[0];

chrome.storage.sync.get(["isActive", "userAgent"], ({ isActive, userAgent }) => {
  toggle.checked = isActive;
  status.textContent = isActive ? "Enabled" : "Disabled";
  if (userAgent) {
    userAgentSelect.value = userAgent;
    customAgentInput.value = userAgent === "custom" ? "" : userAgent;
  }
});

toggle.addEventListener("change", () => {
  const newState = toggle.checked;
  chrome.storage.sync.set({ isActive: newState });
  status.textContent = newState ? "Enabled" : "Disabled";
});

userAgentSelect.addEventListener("change", () => {
  const selectedUserAgent = userAgentSelect.value;
  if (selectedUserAgent) {
    customAgentInput.value = "";
    chrome.storage.sync.set({ userAgent: selectedUserAgent });
  } else {
    chrome.storage.sync.set({ userAgent: "custom" });
  }
});

customAgentInput.addEventListener("input", () => {
  const customUserAgent = customAgentInput.value;
  chrome.storage.sync.set({ userAgent: customUserAgent });
});

// Confirm and refresh the current tab
confirmButton.addEventListener("click", () => {
  chrome.storage.sync.get("userAgent", ({ userAgent }) => {
    if (userAgent) {
      clearCacheAndRefresh();
    }
  });
});

infoButton.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
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
