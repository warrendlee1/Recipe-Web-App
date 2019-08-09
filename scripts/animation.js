const titles =  document.querySelectorAll('.title')

titles.forEach(element => {
    element.addEventListener('click',e => {
        alert('you clicked on' + element)
        element.nextElementSibling.style.opacity = 'block'
        element.nextElementSibling.style.transition = 'all 3s'

    })
});