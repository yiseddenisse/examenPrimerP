      

      /*
        Desarrolla la lógica para convertir los valores del textArea en minusculas: 

        Tip: Divide el problema en partes pequeñas. 

        1) Primero recupera los valores utilizando el DOM y los metodos que vimos en clase. 
        2) Parte los valores por la coma (,). TIP. Utiliza la función split
        3) convierte los valores a minuscula con alguna de las funciones de javascript. 
        4) Escribe en el textArea los nuevos valores

        Realiza todo lo anterior al hacer click en el botón. 
        */

        let boton_uno = document.getElementById("btn_mayusculas").addEventListener("click",recuperaDatos)

        function recuperaDatos(e) {
          e.preventDefault()
          let datos = document.getElementById("txt_may").value
          document.getElementById("txt_may").value = datos.toLowerCase()
        }
      /*
        Crea una funcion llamada "calculateDogAge" que: 
    
    - reciba como argumento un número representando la edad en años humanos.
    - realiza el cálculo de la edad en base a la conversión 1 año humano = 7 años perro.  
    - Deberá escribir en valor convertido. 
    - Recuerda utilizar preventDefault() como lo vimos en clase para evitar que el formulario se envie. 
    - Ojo: Cuando se lee un valor de cualquier formulario, el tipo de dato por default es string. 
           Deberás convertir el string a Entero. 
    
    */
           let btn = document.getElementById("btn_añoshumano").addEventListener("click",calculateDogAge)

           function calculateDogAge(e){
             e.preventDefault()
             let edad_perro = parseInt(document.getElementById("edad_humano").value) * 7
             document.getElementById("edad_perro").value = edad_perro
           }



      /*  OBJETOS 
    
    A) Crea un constructor de tipo "Pokemon" que reciba 4 parametros
    
    1) Nombre
    2) Especie
    3) Ataque
    4) Defensa
    
    
    B) Crea 2 objectos  con diferentes valores. Para los despistados, existen 18 especies de pokeon: 
       Bicho, Dragón, Eléctrico, Hada, Lucha, Fuego, Volador, Fantasma, Planta, Tierra, Hielo, Normal, Veneno, Psíquico, Roca, Acero y Agua
       El Nombre y la Especie son Strings, Ataque y Defensa numericos.
       
       Registra un evento de "click", para que cuando se de click en el botón, se muestren las propiedades de cada objeto en el input correspondiente. 

     */
      
       let botonM = document.getElementById("btn_muestra").addEventListener("click",muestraDatos)

       function muestraDatos(){
        document.getElementById("nombre_poke1").value = pokemon1.nombre
        document.getElementById("especie_poke1").value = pokemon1.especie
        document.getElementById("ataque_poke1").value = pokemon1.ataque
        document.getElementById("defensa_poke1").value = pokemon1.defensa

        document.getElementById("nombre_poke2").value = pokemon2.nombre
        document.getElementById("especie_poke2").value = pokemon2.especie
        document.getElementById("ataque_poke2").value = pokemon2.ataque
        document.getElementById("defensa_poke2").value = pokemon2.defensa
      }
      
      function Pokemon(nombre,especie,ataque,defensa){
        this.nombre=nombre
        this.especie=especie
        this.ataque=ataque
        this.defensa=defensa
        this.muestraDatos=muestraDatos
      }
      
      let pokemon1 = new Pokemon('Pikachu','electrico',150,200)
      let pokemon2 = new Pokemon('Fantasma','volador',300,240)
      
      pokemon1.muestraDatos()
      pokemon2.muestraDatos()