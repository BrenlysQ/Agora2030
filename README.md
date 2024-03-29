# Prueba Agora 2030

    El proyecto consiste en el clon del sitio web existente Agora 2030, se desarrollo la página principal y una página de Blog consumiendo una API para mostrar los artículos.

    - Layout: Header Footer
    - Pagina principal
        La pagina principal consta de 7 secciones separadad por componentes, primero tenemos un banner, luego una seccion introductoria donde se muestran imagenes, titulo y parrafos de alineados en forma de noticias, seguidamente otra seccion similar, Luego se encuentran 2 carrouseles uno de aliados y otro de financiadores, a continuacion una seccion donde se muestran las metricas y el impacto de la web, seguido de esta se encuantra otra seccion de noticias similar a las antes mostradas y por ultimo un formulario de contacto que valida los elementos requeridos y que se ingrese un correo valido
    - Pagina de Blog
        En la pagina de blog nos encontramos con una seccion introductoria, seguida de una seccion de noticias ordenadas en 3 columnas encabezada por una seccion que seria filtro de categorias y paginadas en la parte inferior

## Estructura de los archivos

    - `src`
        - `api` archivo donde se hace la conexion y consulta a la api
        - `assets` imagenes de los carrouseles separadas en carpetas de acuerdo a la seccion a la que pertenezca
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
        - `services` aqui incluimos axios client

## Herramientes y Tecnologias utilizadas

    - `React` libreria principal de desarrollo
    - `Tailwind` Proveedor de estilo
    - `Vite` para la creacion del proyecto
    - `React router dom` para la navegacion
    - `React multi carousel` para los carruseles de aliados y financiadores
    - `React google recaptcha` para el captcha del formulario
    - `PropTypes` validador de props, verifica que los tipos de datos de props se utilicen correctamente
    - `Heroicons` para la paginacion
    - `React hook form` para el manejo de formularios
    - `Yup` para la validacion del formulario
    - `NewsApi: https://newsapi.org/docs/endpoints/top-headlines` para consumir los articulos de la pagina principal y el blog
    - `Axios` para el consumo de la api

## Ejecucion y Compilacion

    ```sh
        npm i
        npm run dev
     ```

## Hosting

    - `http://127.0.0.1:5173/`  presione 'ctr+clik' en la url para ver en su navegador predeterminado.
