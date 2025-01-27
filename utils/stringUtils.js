export function generateRandomEmail() {
    const timestamp = Date.now(); // Use the current timestamp to ensure uniqueness
    return `testuser${timestamp}@example.com`;
  }