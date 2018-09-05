class CalculatorController {
    constructor(){
        this._display = document.querySelector('.display');
        this._btns = document.querySelectorAll('.btn')
        this._operation = [] //Array que guardara os operadores e numeros  
        this.inititialize();
    }
    
    inititialize(){// executar assim que é aberta a calculadora
        this.getButtons();
    }
    
    get display(){// Pegar e colocar um valor no display 
        return this._display.innerHTML;
    } 

    set display(value){
        this._display.innerHTML = value;
    }
     
    getButtons(){// Pegar todos os botões colocar evento click pegar classe e manda execultar
        let buttons = document.querySelectorAll('.btn');
        
       buttons.forEach((btn, index)=>{//adicionar event click
            btn.addEventListener('click', e => {

                let classBtn = btn.classList[2];
                this.execBtn(classBtn)
            });
        })

    }

    clearAll(){// metodo do c apaga tudo 
        this._operation = [];
    }

    clearEntry(){//metodo que apaga o ultimo item do array
        this._operation.pop();
    }

    execBtn(classBtn){//Execulta buttons pela classe 
        switch(classBtn){
            case 'ce':
                this.clearEntry();
                break;
            case 'c':
                this.clearAll();
                break;
            case 'del':
                console.log("OP");
                break;
            case 'divisao':
                this.addOperation('/');
                break;
            case 'multiplicacao':
                this.addOperation('*');
                break;
            case 'subtracao':
                this.addOperation('-');
                break;
            case 'soma':
                this.addOperation('+');
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
                this.addOperation(parseInt(classBtn));
                break;
            case 'igual':
                console.log("IGUAL");
                break;
        }
    }

    addOperation(){

    }
     
}