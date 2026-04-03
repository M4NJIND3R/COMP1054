const table = document.querySelector("table");
let tableSort = new Tablesort(table);

function sortColBgColorChange(clickedCol){
    const tableBodyRows = document.querySelectorAll("tbody tr");

    const tableHeaders = document.querySelectorAll("thead th");

    tableHeaders.forEach((th, index) => {
        th.style.backgroundColor = "#fff";
        if (index == clickedCol){
            th.style.backgroundColor = "#cceeff";
        }
    });

    console.log(tableBodyRows)

    tableBodyRows.forEach( (row, index) =>{
        for (let i = 0; i < row.children.length; i++) {
            row.children[i].style.backgroundColor = "#fff";
            if(i == clickedCol){
                row.children[i].style.backgroundColor = "#cceeff";
            }
        }
    })

}

const tableHeaders = document.querySelectorAll("thead th");


tableHeaders.forEach((element, index) => {
    if (!element.matches("[data-sort-method='none']")){
        element.addEventListener('click', event =>{
            sortColBgColorChange(index)
        })
    }
    
});

