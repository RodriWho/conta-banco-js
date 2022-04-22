class ContaBancaria {
    
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo || valor <= 0){
            return "Operação negada!";
        } else {
            this._saldo = this._saldo - valor 
        }
        return this._saldo;
    }

    depositar(valor){
        if(valor < 0){
            return "Não é possivel depositar valores negativos: " + valor;
        } else if(valor === 0){
            return "valor invalido para deposito: " + valor
        } else {
            this._saldo = this._saldo + valor;
            return this._saldo;
        }

    }

}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero)
        this.tipo = "corrente";
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }

}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = "poupança"
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = "universitária"
    }

    sacar(valor){
        if(valor > this.saldo || valor > 500 || valor <= 0){
            return "Operação negada!";
        } else {
            this.saldo = this.saldo - valor;
        }
        return this.saldo
    }
}
