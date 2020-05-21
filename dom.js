// thake the form input.

const form = document.getElementById("addForm");
const itemList = document.getElementById('items');
form.addEventListener('submit', addToList);



function addToList(e){
    e.preventDefault();
    const item = document.getElementById('item');
    if(item.value){
        
        let li = document.createElement('li');
        li.classList.add('list-group-item');
        let textNode = document.createTextNode(item.value);
        li.appendChild(textNode);

        //create delete button 
        const deleteButton = document.createElement('button');
        textNode = document.createTextNode('X');
        deleteButton.className = 'btn btn-danger btn-sm float-right delete';
        deleteButton.appendChild(textNode);
        li.appendChild(deleteButton);
        itemList.appendChild(li);

        clearInput(item);
    }
}

function clearInput(input){
    input.value = '';
}



//remove from list

itemList.addEventListener('click', removeItem);

function removeItem(e){
    if(e.target.className == 'btn btn-danger btn-sm float-right delete'){
        // get the parrent node
        const item = e.target.parentElement;

        itemList.removeChild(item);
        
        console.log(item);
    }
}




//searching 
const filter = document.getElementById('filter');
filter.addEventListener('keyup', function(e){
    var searchTerm = e.target.value.toLowerCase();
    console.log(searchTerm);


    const items =  Array.from(itemList.children);
    items.forEach(function(item){
        var itemName = item.firstChild.textContent.toLowerCase();
        if(itemName.includes(searchTerm)){
            item.style.display = 'block';
        }else{
            item.style.display='none';
        }
    })

    
})

