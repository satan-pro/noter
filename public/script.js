const sidebarButton = document.getElementById('sidebar-button');
const sidebarText = document.getElementsByClassName('sidebar-text');
const sidebarOptions = document.getElementsByClassName('sidebar-options');

sidebarButton.addEventListener('click', function(){
    for(let i=0; i<sidebarText.length; i++)
    {
        sidebarText[i].classList.toggle('no-text');

        if(sidebarOptions[i].classList.contains('first-child'))
        {
            sidebarOptions[i].classList.remove('first-child');
        }
    }
});



