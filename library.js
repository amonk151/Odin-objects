function book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return name + '\nby ' + author + '\n' + pages + ' pages, ' + '\n' + (read ? 'read\n':'have not read\n');
    }
}

let myLibrary = [];

function addToLibrary(book) {
    myLibrary.push(book);
}

function createLibrary(library){
    
        library.forEach(book => {
            let item = document.createElement("p");
            item.classList.add('book');
            item.innerHTML = book.info().replace(/\n/g , "<br>");

            let rbtn = document.createElement("button");
            rbtn.classList.add('remove');
            rbtn.addEventListener('click', () =>{
                //remove book code
            })
            rbtn.innerHTML = 'remove';

            let cbtn = document.createElement("button");
            cbtn.classList.add('change');
            cbtn.innerHTML = book.read ? 'read' : 'did not read';
            cbtn.addEventListener('click', () =>{
                //change read status code
            })


            document.getElementById("container").append(item);
            item.append(rbtn);
            item.append(cbtn);
        });
}

const book1 = new book('legend', 'marie lu', 300, false);
const book2 = new book('prodiegy', 'marie lu', 350, true);
const book3 = new book('rebel', 'Marie lu', 450, false);
addToLibrary(book1);
addToLibrary(book2);
addToLibrary(book3)

createLibrary(myLibrary);