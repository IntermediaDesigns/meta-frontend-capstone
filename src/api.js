// Function to check if the API is loaded
function waitForAPI(timeout = 5000) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    const checkAPI = () => {
      if (typeof window.fetchAPI === 'function' && typeof window.submitAPI === 'function') {
        resolve();
      } else if (Date.now() - startTime > timeout) {
        reject(new Error('API functions not available after timeout'));
      } else {
        setTimeout(checkAPI, 100);
      }
    };
    checkAPI();
  });
}

// Wrapper for the fetchAPI function
export async function fetchAPI(date) {
  try {
    await waitForAPI();
    return window.fetchAPI(date);
  } catch (error) {
    console.error('Error fetching API:', error);
    // Return a default array of times as a fallback
    return ["17:00", "18:00", "19:00", "20:00", "21:00"];
  }
}

// Wrapper for the submitAPI function
export async function submitAPI(formData) {
  try {
    await waitForAPI();
    return window.submitAPI(formData);
  } catch (error) {
    console.error('Error submitting API:', error);
    // Return true as a fallback to simulate successful submission
    return true;
  }
}