
let names = ['John', 'Alex', 'Vasya'];
let pr = prompt('введите имя');
let name = pr.charAt(0).toUpperCase() + pr.slice(1, pr.length).toLowerCase()

if (pr === name) { 
    

    if (names.includes(name)) { 
        let confirmDelete = confirm('это имя уже есть. удалить его и добавить новое?');
        if (confirmDelete) {
            if (names[0] === name) {
                names = [names[1], names[2]];
              } else if (names[1] === name) {
                names = [names[0], names[2]];
              } else {
                names = [names[0], names[1]];
              }
        } else {
            alert('ok')
            
        }
    }
    names.push(name); 
    
} else {
    alert('пожалуйста, введите корректное имя.'); 
}

console.log(names);





  


