let paragrafo = document.getElementsByTagName('p')
for (let contador = 0; contador < paragrafo.length; contador++) {
    console.log( paragrafo[contador].outerText)
}
