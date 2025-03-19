// index.js
console.log("Start of Program");

// Simulate an API call with async/await
async function fetchData() {
    try {
        console.log("Fetching data...");
        let response = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Data fetched successfully");
            }, 2000); // Simulate a 2-second API call
        });
        console.log(response);
    } catch (error) {
        console.log("Error:", error);
    }
}

fetchData();

console.log("End of Program");
