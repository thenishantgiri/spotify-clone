// Define a function named 'fetcher' used for making API requests
export default function fetcher(url: string, data?: any) {
  // The URL for the 'fetch' function is the current origin plus '/api' plus the 'url' parameter.
  return fetch(`${window.location.origin}/api${url}`, {
    method: data ? "POST" : "GET", // Determine the HTTP method based on the presence of 'data'
    credentials: "include", // Include credentials (cookies) in the request for authentication
    headers: {
      "Content-Type": "application/json", // Set the request headers to specify that the content is in JSON format
    },
    body: data ? JSON.stringify(data) : null, // Serialize 'data' as JSON and include it in the request body if provided
  }).then((res) => {
    // Check the HTTP status code of the response
    if (res.status > 399 && res.status < 200) {
      // If the status code indicates an error, throw an error
      throw new Error();
    }
    // Parse the response as JSON and return it
    return res.json();
  });
}
