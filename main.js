const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");

let display = "";
function buttonPressed(event) {
    const inputText = event.target.textContent;
    // 計算結果出力
    if(inputText === "="){
        display = eval(display);
    }
    // リセット処理
    else if(inputText === "AC"){
        display = "";
    }
    // 小数点，演算子の連続入力を禁止
    else if(display.slice(-1) === "+" || display.slice(-1) === "-" || display.slice(-1) === "*" || display.slice(-1) === "/" || display.slice(-1) === "." ){
         if(inputText === "+" || inputText === "-" || inputText === "*" || inputText === "/" || inputText === "."){
         }
         else{
             display += inputText;
         }
    }
    // 先頭の0入力を禁止
    else if (display === ""){
        if(inputText === "0" || inputText === "00"){
            display = "";
        }
        else{
            display += inputText;
        }
    }
    else{
        display += inputText;
    }
    result.textContent = display;
}
buttons.forEach(button => button.addEventListener("click", buttonPressed));