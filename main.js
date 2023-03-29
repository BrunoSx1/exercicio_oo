    function Animal(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        
        this.emitirSom = function() {
            return "Este método deve ser implementado na classe filha";
        }
    }

    function Cachorro(nome, idade, raca) {
        Animal.call(this, nome, idade);
        this.raca = raca;
    
        
        this.emitirSom = function() {
        console.log("Au au!");
        }
    }

    function Gato(nome, idade, cor) {
        Animal.call(this, nome, idade);
        this.cor = cor;

        this.emitirSom = function() {
        console.log("Miau!");
        }
    }
    
    var rex = new Cachorro("Rex", 5, "Labrador");
    console.log(rex);
    rex.emitirSom();

    var tom = new Gato("Tom", 3, "Preto");
    console.log(tom);
    tom.emitirSom();

    var luna = new Gato("Luna", 2, "Branco e cinza");
    console.log(luna);
    luna.emitirSom();