const searchInput = document.querySelector(".link-search");

if (searchInput) {
    const searchStatus = document.getElementById("search-status");
    const links = Array.from(document.querySelectorAll(".button-group .button1"));

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLocaleLowerCase();
        let visibleCount = 0;

        links.forEach((link) => {
            const matches = link.textContent.toLocaleLowerCase().includes(query);
            link.hidden = !matches;

            if (matches) {
                visibleCount += 1;
            }
        });

        searchStatus.textContent = visibleCount === 0
            ? "No links found. Try a different search."
            : `Showing ${visibleCount} of ${links.length} links.`;
    });
}
