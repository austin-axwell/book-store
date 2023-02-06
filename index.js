const list = document.querySelector('#book-list ul');

//delete books
list.addEventListener('click', function(e){
    if(e.target.className =='delete'){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li)
    }
});

//add books
const add= document.forms['add-book'];
add.addEventListener('submit', function(e){
    e.preventDefault()
    const value = add.querySelector('input[type= "text"]').value;

    //create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteButton = document.createElement('span');


    //add content
    deleteButton.textContent = 'Delete';
    bookName.textContent = value;


    //add classes

    bookName.classList.add('name');
    deleteButton.classList.add('delete')
    
    //append to DOM
    li.appendChild(bookName);
    li.appendChild(deleteButton);

    list.appendChild(li);
});
//checkbox events, onclick display

const hideBox  = document.querySelector('#hideBox');
hideBox.addEventListener ('change', function(e){
    if(hideBox.checked){
        list.style.display = 'none';
    }else{
        list.style.display = 'initial';
    }
});

//filter books
const search = document.forms['Search-books']. querySelector('input');
search.addEventListener('keyup', function(e){
    const term =e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
    const title = book.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term) !=-1){
        book.style.display = 'block';
    }else{
        book.style.display = 'none';
    }
    })
});
