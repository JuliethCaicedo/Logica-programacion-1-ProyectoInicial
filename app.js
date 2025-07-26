//Variables
let numeroMaximo = 5;
let numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1; // Genera un número aleatorio entre 1 y 10
let numeroUsuario = 0;
let contador = 1;

//let intentos = "intento"
let maximoIntentos = 3;

while (numeroUsuario != numeroSecreto) 
{
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximo}`));
    console.log ("El numero ingresado es :" , numeroUsuario);

    if (numeroUsuario == numeroSecreto)
    {
        alert (`Acertaste el número secreto es: ${numeroSecreto} y lo lograste en ${contador} ${contador == 1 ? "intento" : "intentos"}`); 
    } 
    else
        {
            if (numeroUsuario < numeroSecreto) 
            {
                alert ("El número secreto es mayor que el ingresado");
            } 
            else
                {
                    alert ("El número secreto es menor que el ingresado");
                } 
            contador++;
            if ( contador > maximoIntentos )
                {
                    alert ("Lo siento, has agotado tus intentos."); 
                    break;               
                } 
        }   
}