/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of asteroid discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  const yearMap = new Map();
  let maxYear = null;
  let maxCount = 0;

  for (const asteroid of data.asteroids) {
    const year = asteroid.discoveryYear;
    const count = (yearMap.get(year) || 0) + 1;
    yearMap.set(year, count);
    if (count > maxCount) {
      maxCount = count;
      maxYear = year;
    }
  }
  return maxYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
