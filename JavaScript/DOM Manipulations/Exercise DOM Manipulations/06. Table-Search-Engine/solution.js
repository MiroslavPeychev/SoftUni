function solve() {
   let searchInputElement = document.getElementById('searchField');
   let searchButton = document.getElementById('searchBtn');
   let allRowsElements = document.querySelectorAll('tbody > tr');

   searchButton.addEventListener('click', () => {
      let searchInput = searchInputElement.value;
      let regex = new RegExp(searchInput, 'gim');

      Array.from(allRowsElements).map(currentTableRow => {
         currentTableRow.classList.remove('select');

         if (currentTableRow.textContent.match(regex) !== null) {
            currentTableRow.classList.add('select');
         }
      });

      searchInputElement.value = '';
   });
}