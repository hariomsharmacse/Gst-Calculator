const gstRate = document.getElementById('options');
const gstIncExc = document.getElementById('enc_exc');
const gstAmount = document.getElementById('amount');
const finalOutput = document.getElementById('result');

function checkGst(){
    let gstRateValue = gstRate.value;
    if(gstIncExc.value === "excluding"){
        finalOutput.innerText = (gstAmount.value * gstRateValue.slice(0, -1)) / 100;
    }else if(gstIncExc.value === "including"){
        let firstValue = gstAmount.value / (100 + Number(gstRateValue.slice(0, -1)));
        let seconValue = firstValue * gstRateValue.slice(0, -1);
        finalOutput.innerText = seconValue;
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




