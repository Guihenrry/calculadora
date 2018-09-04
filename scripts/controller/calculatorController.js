class CalculatorController {
    constructor(){
        this._display = document.querySelector('.display');
        this._btns = document.querySelectorAll('.btn')

        this.inititialize();
    }
    // executar assim que é aberta a calculadora
    inititialize(){
        this.getButtons();
    }
    // Pegar e colocar um valor no display 
    get display(){
        return this._display.innerHTML;
    } 

    set display(value){
        this._display.innerHTML = value;
    }
    // Pegar todos os botões colocar evento click pegar classe e manda execultar 
    getButtons(){
        let buttons = document.querySelectorAll('.btn');
        //adicionar event click
       buttons.forEach((btn, index)=>{
            btn.addEventListener('click', e => {

                let classBtn = btn.classList[2];
                this.execBtn(classBtn)
            });
        })

    }

    //Execulta buttons pela classe 
    execBtn(classBtn){
        switch(classBtn){
            case 'ce':
                console.log("OP");
                break;
            case 'c':
                console.log("OP");
                break;
            case 'del':
                console.log("OP");
                break;
            case 'divisao':
                console.log("OP");
                break;
            case 'multiplicacao':
                console.log("OP");
                break;
            case 'subtracao':
                console.log("OP");
                break;
            case 'soma':
                console.log("OP");
                break;
            case 'ponto':
                console.log("OP");
                break;
            case 'tsinal':
                console.log("OP");
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                console.log("numero");
                break;
            case 'igual':
                console.log("IGUAL");
                break;
        }
    }
     
}