const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const table = document.querySelector("table");
let prices=document.querySelectorAll('.price');
let price=[...prices];

const getSum = () => {
//Add your code here
	let sum=0;
	for(let i=0;i<price.length;i++){
		   sum+=price[i].textContent;
    }
	  
     let lastrow=document.createElement('tr');
     let totalcell=document.createElement('td');
     totalCell.textContent = `Total Price: ${sum}`;
	 totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

