

export function search(onSearch) {
    const searchBox = document.createElement('div')
    searchBox.className = 'searchBox';
    const input = document.createElement('input');
    input.className= 'input';
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.innerHTML = 'search'
    
    input.placeholder = 'Enter city';

    searchBox.appendChild(input);
    searchBox.appendChild(btn);

   
    btn.addEventListener("click", () => {
        const value = input.value;
        onSearch(value);
    })
   

   return searchBox;
}