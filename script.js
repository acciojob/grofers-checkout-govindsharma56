const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const table = document.querySelector("table");
let prices=document.querySelectorAll('.prices');
let price=[...prices];

const getSum = () => {
//Add your code here
	let sum=0;
	for(let i=0;i<price.length;i++){
		   sum+=Number(price[i].textContent);
    }
	  
    let totalRow = document.createElement('tr');
    let totalCell = document.createElement('td');
    
    // Stretch the single cell across the 2 columns of your table
    totalCell.colSpan = 2;
    totalCell.textContent = `${sum}`;
    
    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

