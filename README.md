# Prueba Agora 2030

El proyecto consiste en el clon del sitio web existente Agora 2030, se desarrolló la página principal y una página de Blog consumiendo una API para mostrar los artículos.
Cabe mencionar que la pagina cuenta con responsive para dispositivos móviles y tablet.

- Layout: Header Footer
- Página principal

  La pagina principal consta de 7 secciones separadas por componentes, primero tenemos un banner, luego una sección introductoria donde se muestran imágenes, título y párrafos alineados en forma de noticias, seguidamente otra sección similar, Luego se encuentran 2 carrouseles uno de aliados y otro de financiadores, a continuación una sección donde se muestran las métricas,y el impácto de la web, seguido de ésta se encuentra otra sección de noticias similar a las antes mostradas y por último un formulario de contácto que valida los elementos requeridos y que se ingrese un correo válido

- Página de Blog

  En la página de blog nos encontramos con una sección introductoria, seguida de una sección de noticias ordenadas en 3 columnas paginadas en la parte inferior y encabezada por una sección de categorías.

## Estructura de los archivos

- `src`
  - `api` archivo donde se hace la conexion y consulta a la api
  - `assets` imagenes de los carrouseles separadas en carpetas de acuerdo a la sección a la que pertenezca
  - `config` archivos de constante y configuracion del carrousel
  - `layout`
    - header
    - footer
  - `pages`
    - home
      - `components` cada seccion de la pagina principal
    - blog
      - `components` cada seccion del blog
  - `router` archivo de rutas

## Herramientas y Tecnologias utilizadas

- `React` librería principal de desarrollo
- `Tailwind` Proveedor de estilo
- `Vite` para la creacion del proyecto
- `React router dom` para la navegación
- `React multi carousel` para los carruseles de aliados y financiadores
- `React google recaptcha` para el captcha del formulario
- `PropTypes` validador de props, verifica que los tipos de datos de props se utilicen correctamente
- `Heroicons` para la paginación
- `React hook form` para el manejo de formularios
- `Yup` para la validación del formulario
- `The New York Times Developer Network` [https://api.nytimes.com/svc/search/v2] para consumir los artículos de la página principal y el blog
- `Axios` para el consumo de la api

## Ejecucion y Compilacion

```sh
npm intall
```

```sh
npm run dev
```

## Hosting

- [https://main--deft-phoenix-b766e6.netlify.app/] presione 'ctr+clik' en la url para ver en su navegador predeterminado.
