const gstRate = document.getElementById('options');
const gstIncExc = document.getElementById('enc_exc');
const gstAmount = document.getElementById('amount');
const finalOutput = document.getElementById('result');
const Total = document.getElementById('total');

function checkGst(){
    let gstRateValue = gstRate.value;
    if(gstIncExc.value === "excluding"){
        let exValue = (gstAmount.value * gstRateValue.slice(0, -1)) / 100;
        
        finalOutput.innerText = parseFloat(exValue).toFixed(2);
        Total.innerText = parseFloat(exValue + Number(gstAmount.value)).toFixed(2);
    }else if(gstIncExc.value === "including"){
        let firstValue = gstAmount.value / (100 + Number(gstRateValue.slice(0, -1)));
        let seconValue = firstValue * gstRateValue.slice(0, -1);
        
        finalOutput.innerText = parseFloat(seconValue).toFixed(2);
        Total.innerText = gstAmount.value - parseFloat(seconValue).toFixed(2);

    }
}


gstAmount.addEventListener('input', () => {
 checkGst()
})


gstRate.addEventListener('input', () => {
checkGst();
})

gstIncExc.addEventListener('input', () => {
  checkGst();
})




