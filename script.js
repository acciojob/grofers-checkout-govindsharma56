const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const table = document.querySelector("table");
const ans=document.querySelector('#ans')
let prices=document.querySelectorAll('.prices');
let price=[...prices];

const getSum = () => {
//Add your code here
	let sum=0;
	for(let i=0;i<price.length;i++){
		   sum+=Number(price[i].textContent);
    }
	
     let totalcell=`${sum}`
    
    ans.textContent=totalcell;

};

getSumBtn.addEventListener("click", getSum);

