const data = [
    {   
        id: 1,
        title: "Introduction to Programming",
        category: "Education",
        description: "A beginner's guide to programming concepts and techniques."
    },
    {
        id: 2,
        title: "The Great Outdoors",
        category: "Adventure",
        description: "Exploring the beauty and challenges of outdoor activities."
    },
    {
        id: 3,
        title: "Healthy Eating",
        category: "Adventure",
        description: "Tips and recipes for maintaining a healthy and balanced diet."
    },
    {
        id: 4,
        title: "Tech Innovations",
        category: "Technology",
        description: "Latest advancements and trends in the tech industry."
    },
    {
        id: 5,
        title: "World History",
        category: "History",
        description: "An overview of significant events and eras in world history."
    }
];


const container = document.getElementById('listItem'); 

function createItems(data){
    let index = 1;
    data.forEach(item => {
        const element = document.createElement('div');
        element.className = 'inline-block w-full transition duration-300 delay-150 ease-in-out rounded-lg border-2 border-gray-500 dark:border-yellow-300 px-7 py-4 mx-auto';
        element.id = `listItem${index}` 

        const title = document.createElement('h2');
        title.innerText = item.title;
        title.className = 'font-bold text-2xl  text-blue-800 dark:text-yellow-500 '
        element.appendChild(title);

        const category = document.createElement('p');
        category.innerText = item.category;
        category.className = 'font-light text-sm text-blue-800 dark:text-yellow-300 '
        element.appendChild(category);

        const description = document.createElement('p');
        description.innerText = item.description;
        description.className = 'text-left text-sm font-light text-gray-500 dark:text-white'
        element.appendChild(description);

        container.appendChild(element);
        index++;
    });
}

createItems(data);




const paginationContainer = document.getElementById('paginationItem');
function pagination(data){
    if(data.length > 0){
        for(let i=0; i<data.length; i++)
            createPaginationItem(i+1);
    }
}

pagination(data);
let pagActive = 1;

showWhichItem(pagActive)

function showWhichItem(pagNumber){
    for(let i=0 ;i<data.length;i++){
        if(i === pagNumber-1){
            // document.getElementById(list[i]).style.display='grid';
            document.querySelector(`.pag${i+1}`).style.backgroundColor ='#252fae';
            move(pagNumber)
        }
        else{
            document.querySelector(`.pag${i+1}`).style.backgroundColor ='#d1d1d1';
            // document.getElementById(list[i]).style.display='none'
        }

    }
}

function createPaginationItem(pagNumber){
    const div = document.createElement('div')
    div.innerHTML = pagNumber;
    div.className = 'w-10 h-10 text-white font-bold flex justify-center items-center ' + ` pag pag${pagNumber}`
    div.id = `pag${pagNumber}`

    const onclickAttribute = document.createAttribute('onclick');
    onclickAttribute.value = `showWhichItem(${pagNumber})`;
    div.setAttributeNode(onclickAttribute);
    paginationContainer.appendChild(div);
    
}

// scroll to right

function pagRight(){
    if(pagActive < data.length){
        pagActive += 1;
        showWhichItem(pagActive);

    }
   
}

// Scroll to left

function pagLeft(){
    if(pagActive > 1){
        pagActive -= 1;
        showWhichItem(pagActive);
    }
    
}

// move the element using the element index

function move(index){
    data.forEach(item=>{
        document.getElementById(`listItem${item.id}`).style.transform = `translateX(-${(index-1) * 100}%)`;
    })
}

const filterInput = document.getElementById('inputFilter');
data.forEach(item=>{
    let option = document.createElement('option'); 
    option.innerHTML = item.category;
    let valueAttribute = document.createAttribute('value');
    valueAttribute.value = item.category; 
    option.setAttributeNode(valueAttribute)
    
    filterInput.appendChild(option)
})

// filter function 

function applyFilter(){
    const filterInput = document.getElementById('inputFilter').value;
    let index = 0;
    data.forEach(item => {
        if(item.category !== filterInput){
            index++;
            document.getElementById(`listItem${item.id}`).style.display='none';
        }
        else{
            document.getElementById(`listItem${item.id}`).style.display='inline-block';
        }
    })
    for(let i =0 ; i<data.length; i++){
        if( i >= data.length - index)
            document.getElementById(`pag${i+1}`).style.display='none'
        else 
            document.getElementById(`pag${i+1}`).style.display='flex'
    }
}

function reset(){
    data.forEach(item => {
            document.getElementById(`listItem${item.id}`).style.display='inline-block';
    })
    for(let i = 0; i<data.length; i++){
        document.getElementById(`pag${i+1}`).style.display='flex'
    }

}
