var tabs = document.querySelectorAll("[role='tab']");
var tabpanels = document.querySelectorAll("[role='tabpanel']");

tabs[0].classList.add('active-tab');
tabpanels[0].classList.add('active-tabpanel');

tabs.forEach((tab) => {
    tab.addEventListener("click", (event) =>{
        event.preventDefault();
        tabs.forEach((tab) =>{
            if(tab.childNodes[0] != event.target){
                tab.classList.remove("active-tab");
                document.querySelector(tab.childNodes[0].getAttribute("href")).classList.remove("active-tabpanel");
            }else{
                tab.classList.add("active-tab");
                document.querySelector(tab.childNodes[0].getAttribute("href")).classList.add("active-tabpanel");
            }
        });
    });
});