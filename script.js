const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let prices=document.querySelectorAll('.price');
let price=[...prices];

const getSum = () => {
//Add your code here
	let sum=0;
	for(let i=0;i<price.length;i++){
		   sum+=price[i];
    }
	return sum;
  
};

getSumBtn.addEventListener("click", getSum);

