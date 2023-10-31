const apiURL = 'https://api.noroff.dev/api/v1/rainy-days';

// Fetch data from the API

const fetchData = async () => {
  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // Code to handle the data goes here
    console.log(data);
  } catch (error) {
    console.error('Error fetching data', error);
  }
};

// Call the fetchData

fetchData();