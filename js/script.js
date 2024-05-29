document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
  
    // Event listener for search button click
    searchButton.addEventListener("click", function() {
      const searchTerm = searchInput.value.trim();
      if (searchTerm !== "") {
        // Perform search or any other action here
        console.log("Searching for: " + searchTerm);
      }
    });
  
    // Event listener for pressing Enter key
    searchInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        searchButton.click();
      }
    });
  });
  