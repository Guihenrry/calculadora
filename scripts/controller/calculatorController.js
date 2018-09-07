class CalculatorController {
    constructor(){
        this._display = document.querySelector('.display');
        this._btns = document.querySelectorAll('.btn')
        this._operation = [] //Array que guardara os operadores e numeros  
        this.inititialize();
        this._parenthesisOpem = false;
    }
    
    inititialize(){// executar assim que é aberta a calculadora
        this.getButtons();
        this.initZero();
    }

    initZero(){// metodo que coloca 0 quando esta vazio 
        if(this._operation.length == 0){
            this._display.innerHTML = 0;
        }
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
            this.addEventListenerAll(btn, 'click drag', e => {

                let classBtn = btn.classList[2];
                this.execBtn(classBtn)
            });
        })

    }

    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn)

        })

    }

    showDisplay(){ // transforma o array da operação e mostrar no display 
        this.display = this._operation.join('');
    }

    execBtn(classBtn){//Execulta buttons pela classe 
        switch(classBtn){
            case 'ce':
                this.clearEntry();
                break;
            case 'c':
                this.clearAll();
                break;
            case 'parentese':
                this.changeParenthesis();
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
                this.calc();
                break;
        }
    }

    clearEntry(){//metodo que apaga o ultimo item do array
        this._operation.pop();
        this.showDisplay();
        this.initZero();
    }

    clearAll(){// metodo do c apaga tudo 
        this._operation = [];
        this.showDisplay();
        this.initZero();
    }

    changeParenthesis(){//metodo para abrir e fechar parentese
        if(this._parenthesisOpem){
            this._operation.push(')');
            this._parenthesisOpem = false;
        } else {
            this._operation.push('(');
            this._parenthesisOpem = true;
        }
        this.showDisplay();
    }

    addOperation(value){
        this._operation.push(value);
        this.showDisplay();
    }

    calc(){//metodo que calcula
        let expre = this._operation.join('');
        this._operation = [eval(expre)];
        this.display = this._operation;
    }
     
}