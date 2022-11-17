// stałe wartości potrzebne do obliczeń
const PODATEK_VAT = 0.24;
const CENA_TELEFONU = 899.99;
const CENA_OSLONKI = 25.99;

// zapytanie do użytkownika o potrzebne dane

SALDO_BANKOWE = prompt( 'Ile masz kasy na koncie?');
ile_chce_wydac = prompt( 'Ile z tego jesteś gotowy wydac?');

//obliczamy cenę jednego zestawu
var cena_zestawu = ( CENA_TELEFONU + CENA_OSLONKI ) * PODATEK_VAT;

//wyświetlamy wyniki dla użytkownika
console.log( 'Witaj w sklepie z telefonami! Twoj wybrany model kosztuje ' + CENA_TELEFONU + 'PLN. Dodatkowa oslonka to koszt ' + CENA_OSLONKI + 'PLN. Zdecydowales sie na zestaw!');
console.log( 'Cena zestawu: ' + cena_zestawu.toFixed ( 2 ) + 'PLN');
console.log( 'Twoje saldo bankowe: ' + SALDO_BANKOWE + 'PLN');
console.log( 'Ile planujesz wydac: ' + ile_chce_wydac + 'PLN');

//ustabilizowanie ceny zestawu
var jeden_komplet = cena_zestawu;

//liczenie ilości pętli
var ile_petli = 0

//pętla licząca ilość zestawów, które użytkowniek może kupić
while ( cena_zestawu <= ile_chce_wydac ) {
    console.log( 'Poprosze jeszcze jeden! ');
     cena_zestawu = cena_zestawu + jeden_komplet;   
     ile_petli = ile_petli + 1;  
}

if (cena_zestawu > ile_chce_wydac) {
    cena_zestawu = cena_zestawu - jeden_komplet
}
else {
    cena_zestawu = cena_zestawu;
}

//Odpowiedz użytkownika
if ( jeden_komplet <= ile_chce_wydac ) { 
    console.log( 'Biore za ' + cena_zestawu.toFixed( 2 ) + 'PLN' + ', czyli ' + ile_petli + '.' );
}
else {
    console.log( ' Nie stac mnie :(');
}