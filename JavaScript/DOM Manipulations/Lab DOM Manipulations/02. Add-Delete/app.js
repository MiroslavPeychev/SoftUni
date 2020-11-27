function addItem() {
    let list = document.getElementById('items');
    list.addEventListener('click', deleteItem);

    let newItemText = document.getElementById('newText');
    let newItem = document.createElement('li');
    newItem.innerHTML = `${newItemText.value} <a href="#">[Delete]</a>`;
    list.appendChild(newItem);
    newItemText.value = '';

    function deleteItem(item) {
        let elementToDelete  = item.target.parentNode;
        elementToDelete.remove();
    }
}