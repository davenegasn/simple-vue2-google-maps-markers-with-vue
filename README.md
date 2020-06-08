# Prueba Agencia OQO

### ¿Cómo afronté el desafío?
No tenía experiencia creando marcadores dinámicos con google maps, así que primero fue buscar como funcionaban. Posteriormente me decidí por utilizar la librería de Vue vue2-google-maps que resultó ser bastante útil.

El código es bastante sencillo, es una aplicación construida a partir de vue-cli, que consume datos de la API enviada y que cuenta con un componente, que es el <map>, que imprime checkboxes a partir de la información consumida y posteriormente captura el evento change e imprime (o remueve) marcadores en el mapa. El resto es la maquetación html y scss. 
  
El preprocesador elegido fue Sass, además se añade un link al CDN del CSS minificado de boostrap para acelerar el proceso de maquetación. 

El mayor reto fue lograr que los maracadores se pudiesen quitar luego de deseleccionar el checkbox. El proceso de pintar marcadores en un mapa fue bastante sencillo teniendo acceso a las coordenadas mediante la API. 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
