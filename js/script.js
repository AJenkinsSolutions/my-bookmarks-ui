// Dynamiclly render our panel content when the tabs are selected
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const btn = document.getElementById('menu-btn')
const logo = document.getElementById('logo')
const menu = document.getElementById('menu')


// Tabs Event Listerner
tabs.forEach((tab) => tab.addEventListener('click', onTabClick))

// Hamburger button listener
btn.addEventListener('click', navToggle)

function onTabClick(e){
    //e .target refers to the the tab being clicked
    
    // Deactovate all tabs
    tabs.forEach((tab)=>{
        //console.log(tab.children[0])
        tab.children[0].classList.remove(
            'border-softRed',
            'border-b-4',
            'border-b-0'
        )
    })
    // Hide all panels aka add hidden class
    panels.forEach((panel) => {
        panel.classList.add('hidden')
    })

    // Activate a new tab & panel, based on target 
    e.target.classList.add('border-softRed', 'border-b-4')
    const classString = e.target.getAttribute('data-target')
    //console.log('Debug: ClassString: ' + classString)
    
    // Gets the panels -section by Id
    // Get the specific panel by class name from the data target (panel-1 or panel-2 etc...)
    // Remove the hidden class from that panel so its visable
    document
    .getElementById('panels-section')
    .getElementsByClassName(classString)[0]
    .classList.remove('hidden')



    console.log("Debug: target "+ e.target.classList)

}




// Toggle Mobile Menu
function navToggle() {
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')

    if(menu.classList.contains('flex')){
        logo.setAttribute('src', '/images/logo-bookmark-footer.svg')
    } else{
        logo.setAttribute('src', '/images/logo-bookmark.svg')
    }
    

}
