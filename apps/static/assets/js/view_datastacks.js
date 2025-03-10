        document.addEventListener("DOMContentLoaded", function () {
            let allData = []; // Store full dataset for filtering
            let filteredData = []; // Store filtered data for pagination
            let currentPage = 1;
            const itemsPerPage = 3; // Adjust based on your layout
            const maxPageNumbersToShow = 5; // Number of pages to display in pagination
            const container = document.getElementById("data-container");
            const dropdown1 = document.getElementById("dropdown1");
            const dropdown2 = document.getElementById("dropdown2");
            const submitButton = document.getElementById("data-filter-submit-btn");
            const paginationContainer = document.getElementById("data-pagination-container");
        
            // Fetch data from API
            fetch("/api/v1/data")  // Update with your actual API endpoint
                .then(response => response.json())
                .then(data => {
                    allData = Object.values(data.datastack); // Store for filtering
                    filteredData = allData; // Default to all data
                    renderCards();
                })
                .catch(error => console.error("Error fetching data:", error));
        
            // Function to render filtered cards with pagination
            function renderCards() {
                container.innerHTML = ""; // Clear existing content
        
                if (filteredData.length === 0) {
                    container.innerHTML = `<p>No results found.</p>`;
                    paginationContainer.innerHTML = ""; // Clear pagination
                    return;
                }
        
                // Calculate paginated data
                let startIndex = (currentPage - 1) * itemsPerPage;
                let endIndex = startIndex + itemsPerPage;
                let paginatedData = filteredData.slice(startIndex, endIndex);
        
                // Render paginated cards
                paginatedData.forEach(dataset => {
                    let cardHTML = `
                        <div class="col-md-4 mb-4 d-flex align-items-stretch">
                            <div class="card d-flex flex-column h-100">
                                <div class="image-container">
                                    <img src="${dataset.thumbnail}" class="card-img-top" alt="Thumbnail">
                                </div>
                                <div class="card-body flex-grow-1 d-flex flex-column">
                                    <h5 class="card-title">${dataset.name}</h5>
                                    <p class="card-text">${dataset.basic_info}</p>
                                    <div>
                                        ${dataset.keywords.map(keyword => `<span class="keyword">${keyword}</span>`).join(" ")}
                                    </div>
                                    <a href="/data/${dataset.id}" class="btn btn-primary mt-2">View Details</a>
                                </div>
                            </div>
                        </div>
                    `;
                    container.innerHTML += cardHTML;
                });
        
                updatePaginationControls();
            }
        
            // Function to filter cards based on dropdown selection
            function filterCards() {
                const selected1 = dropdown1.value;
                const selected2 = dropdown2.value;
        
                filteredData = allData.filter(dataset => {
                    const keywords = dataset.keywords;
                    const match1 = selected1 && selected1 !== "All" ? keywords.includes(selected1) : true;
                    const match2 = selected2 && selected2 !== "All" ? keywords.includes(selected2) : true;
        
                    return match1 && match2;
                });
        
                currentPage = 1; // Reset to first page after filtering
                renderCards();
            }
        
            // Function to update pagination controls with First, Last, Previous, Next, and Page Numbers
            function updatePaginationControls() {
                paginationContainer.innerHTML = ""; // Clear old pagination
        
                let totalPages = Math.ceil(filteredData.length / itemsPerPage);
                if (totalPages <= 1) return; // Hide pagination if only 1 page
        
                // Create pagination elements
                let createPageItem = (text, page, disabled = false, active = false) => {
                    let li = document.createElement("li");
                    li.classList.add("page-item");
                    if (disabled) li.classList.add("disabled");
                    if (active) li.classList.add("active");
        
                    let a = document.createElement("a");
                    a.classList.add("page-link");
                    a.href = "#";
                    a.innerText = text;
                    if (!disabled) {
                        a.addEventListener("click", function (e) {
                            e.preventDefault();
                            currentPage = page;
                            renderCards();
                        });
                    }
        
                    li.appendChild(a);
                    return li;
                };
        
                // First Button
                paginationContainer.appendChild(createPageItem("First", 1, currentPage === 1));
        
                // Previous Button
                paginationContainer.appendChild(createPageItem("Previous", currentPage - 1, currentPage === 1));
        
                // Page Number Range Calculation
                let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
                let endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);
                if (endPage - startPage + 1 < maxPageNumbersToShow) {
                    startPage = Math.max(1, endPage - maxPageNumbersToShow + 1);
                }
        
                // Add Page Numbers
                for (let i = startPage; i <= endPage; i++) {
                    paginationContainer.appendChild(createPageItem(i, i, false, currentPage === i));
                }
        
                // Next Button
                paginationContainer.appendChild(createPageItem("Next", currentPage + 1, currentPage === totalPages));
        
                // Last Button
                paginationContainer.appendChild(createPageItem("Last", totalPages, currentPage === totalPages));
            }
        
            // Add event listener to the submit button
            submitButton.addEventListener("click", function () {
                filterCards();
            });
        });
        