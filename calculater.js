function add(){
let  num1=Number(document.querySelector("#num1").value)
let num2=Number(document.querySelector("#num2").value)
let sum=num1+num2;
document.querySelector("#result").value=sum;

}
function sub(){
    let  num1=Number(document.querySelector("#num1").value)
    let num2=Number(document.querySelector("#num2").value)
    let sum=num1-num2;
    document.querySelector("#result").value=sum;
    
    }
    function mult(){
        let  num1=Number(document.querySelector("#num1").value)
        let num2=Number(document.querySelector("#num2").value)
        let sum=num1*num2;
        document.querySelector("#result").value=sum;
        
        }
        function divide(){
            let  num1=Number(document.querySelector("#num1").value)
            let num2=Number(document.querySelector("#num2").value)
            let sum=num1/num2;
            document.querySelector("#result").value=sum;
            
            }
            function mod(){
                let  num1=Number(document.querySelector("#num1").value)
                let num2=Number(document.querySelector("#num2").value)
                let sum=num1%num2;
                document.querySelector("#result").value=sum;
                
                }