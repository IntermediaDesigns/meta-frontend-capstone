// Mock implementation of fetchAPI
function mockFetchAPI(date) {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // Generate random available times
      const times = ["17:00", "18:00", "19:00", "20:00", "21:00"].filter(() => Math.random() > 0.3);
      resolve(times);
    }, 1000);
  });
}

// Mock implementation of submitAPI
function mockSubmitAPI(formData) {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate 90% success rate
      const success = Math.random() < 0.9;
      resolve(success);
    }, 1000);
  });
}

// Wrapper for the fetchAPI function
export async function fetchAPI(date) {
  console.log('Fetching available times for:', date);
  try {
    const times = await mockFetchAPI(date);
    console.log('Available times:', times);
    return times;
  } catch (error) {
    console.error('Error fetching API:', error);
    return ["17:00", "18:00", "19:00", "20:00", "21:00"];
  }
}

// Wrapper for the submitAPI function
export async function submitAPI(formData) {
  console.log('Submitting reservation:', formData);
  try {
    const result = await mockSubmitAPI(formData);
    console.log('Submission result:', result);
    return result;
  } catch (error) {
    console.error('Error submitting API:', error);
    return true;
  }
}