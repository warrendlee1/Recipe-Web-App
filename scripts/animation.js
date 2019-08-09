const titles =  document.querySelectorAll('#name_dish');

titles.forEach(element => {
    element.addEventListener('click', e => {
        // alert("you clicked on + element");
        element.nextElementSibling.style.display = 'block'
        element.nextElementSibling.style.transition = 'all 3s'

    })
});