webpackJsonp([0x6c9f439149d2],{523:function(a,n){a.exports={data:{site:{siteMetadata:{title:"My Code bad",author:"Guillermo Paredes Torrez"}},markdownRemark:{id:"/home/gd/Development/MyCodeBad/blog/src/pages/react-parte-1/index.md absPath of file >>> MarkdownRemark",html:'<h3>Introducción</h3>\n<p>En esta primera parte, crearemos todo lo necesario para empezar con nuestro “React Tareas”.</p>\n<p>El proyecto tendra la siguiente estructura.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/estructura-9eccdb231e5d34cb04e03c6b0f786367-bf50e.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 113.30049261083744%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAIAAACEf/j0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABaUlEQVQ4y5VU2W6DMBDkP9o0B+E2+MD45DKQNEnb//+dbpU3ElWxNEKyYTy7s4MDIQalXZzQNGP7A/JCQJk1dhFygFMOYelH5k0PeNsk75vUW7nCilANwER7k48R1maely9Uit2+8CMfQkSo6fozNO/dc5IiIbth+Cwr6a2cZtS2y+AuWc63u9yPHB4RZX9lQ/PeylkOho0wrfBY/aP89FwoGxs71rWFmRWogY8eAYfGCQE7V/sBoS2XF2W+eeMoG/JCFkitkOVCqhkTu3oboJILNWlzVnrWZikrHSd1kvIVopg97gdxwdtuaUQPhT2t7R9APKmbrpTa+9rPbVSxrj/Z9gRuec85rRpgCjlGMYG1V0IDhhUkBHoG2Y8tIHtdP2BEje4yTtf7jy3VCCF/lVziZnRXxrsoxknKoHN4vkqWqnXuJpWreQch24Lnu1c9D4ztl+XHTbdGDHfPPAzDdWcsJGyCa8h3VL/P/N3TiVf1LAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="react tareas app"\n        title=""\n        src="/static/estructura-9eccdb231e5d34cb04e03c6b0f786367-f8fb9.jpg"\n        srcset="/static/estructura-9eccdb231e5d34cb04e03c6b0f786367-e8976.jpg 148w,\n/static/estructura-9eccdb231e5d34cb04e03c6b0f786367-63df2.jpg 295w,\n/static/estructura-9eccdb231e5d34cb04e03c6b0f786367-f8fb9.jpg 590w,\n/static/estructura-9eccdb231e5d34cb04e03c6b0f786367-bf50e.jpg 609w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3>Comencemos !</h3>\n<h4>Creando el proyecto.</h4>\n<p>Recordar que tenemos que tener instalado el cli de react <a href="https://github.com/facebook/create-react-app">create-react-app</a> , en nuestro computador.</p>\n<p>Nos ubicamos en nuestro directorio de trabajo, y ejecutamos el siguiente comando, nos permitira crear toda la estructura basica de react.js instalada todas las dependencias necesarias.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ssh"><code class="language-ssh">$ create-react-app react-tareas</code></pre>\n      </div>\n<p>Luego entramos a la carpeta de nuestro proyecto y levantamos el proyecto.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ssh"><code class="language-ssh">$ cd react-tareas\nreact-tareas $ npm run start</code></pre>\n      </div>\n<p>Nos abrira en el navegador en la dirección <a href="http://localhost:3000">http://localhost:3000</a>\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/react-tareas-vacio-20c583e510040093be8575e7ae8b8d7f-b88e2.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.388888888888886%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAAZUlEQVQoz+3MwQqAIBAE0P0HvWWdo0tIP7Zs7t+LE3kL1Cg6dHDgIazMkDEGJdba/E7OYfEb5tVjdMPlr4RUFTXMDBGBhpCJ7PnW6hBuklLCk1CMETXnWEmrQ7XSW4SP0wd/OHgADaIU9qdeW00AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="react tareas app"\n        title=""\n        src="/static/react-tareas-vacio-20c583e510040093be8575e7ae8b8d7f-f8fb9.jpg"\n        srcset="/static/react-tareas-vacio-20c583e510040093be8575e7ae8b8d7f-e8976.jpg 148w,\n/static/react-tareas-vacio-20c583e510040093be8575e7ae8b8d7f-63df2.jpg 295w,\n/static/react-tareas-vacio-20c583e510040093be8575e7ae8b8d7f-f8fb9.jpg 590w,\n/static/react-tareas-vacio-20c583e510040093be8575e7ae8b8d7f-85e3d.jpg 885w,\n/static/react-tareas-vacio-20c583e510040093be8575e7ae8b8d7f-d1924.jpg 1180w,\n/static/react-tareas-vacio-20c583e510040093be8575e7ae8b8d7f-b88e2.jpg 1440w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h4>Manos al código.</h4>\n<p>Para la parte de estilo usaremos <a href="https://getbootstrap.com/">Bootstrap 4</a> y <a href="https://reactstrap.github.io/">reactstrap</a>, e instalaremos dichas dependencias necesarias.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ssh"><code class="language-ssh">react-tareas $ npm i -S boostrap reactstrap</code></pre>\n      </div>\n<p>Luego editamos el index.js agregando el estilo de bootstrap.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">\'react-dom\'</span>\n<span class="token keyword">import</span> <span class="token string">\'./index.css\'</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">\'./App\'</span>\n<span class="token keyword">import</span> registerServiceWorker <span class="token keyword">from</span> <span class="token string">\'./registerServiceWorker\'</span>\n<span class="token keyword">import</span> <span class="token string">\'../node_modules/bootstrap/dist/css/bootstrap.min.css\'</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token function">registerServiceWorker</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Comenzaremos editando el archivo <code class="language-text">App.js</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Header <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./components\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Tareas <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./containers\'</span>\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Header <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>Tareas <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> App</code></pre>\n      </div>\n<p>Creamos nuestro componente <code class="language-text">Header</code> en la ruta <code class="language-text">src/components/Header</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Header <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./components\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Tareas <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./containers\'</span>\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Header <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>Tareas <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> App</code></pre>\n      </div>\n<p>Creamos nuestro container <code class="language-text">Tareas</code> en la ruta <code class="language-text">src/containers/Tareas</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> TareasForm <span class="token keyword">from</span> <span class="token string">\'./../../forms/TareasForm\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> TableCmp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./../../components\'</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Tareas</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    tareas<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n  <span class="token function-variable function">numeroAleatorio</span> <span class="token operator">=</span> <span class="token punctuation">(</span>min<span class="token punctuation">,</span> max<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>max <span class="token operator">-</span> min<span class="token punctuation">)</span> <span class="token operator">+</span> min<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token function-variable function">borrarTarea</span> <span class="token operator">=</span> index <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> tareas <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      tareas<span class="token punctuation">:</span> tareas<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>tarea<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> i <span class="token operator">!==</span> index\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token function-variable function">agregarTarea</span> <span class="token operator">=</span> tarea <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      tareas<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>tareas<span class="token punctuation">,</span>\n        <span class="token punctuation">{</span> nombre<span class="token punctuation">:</span> tarea<span class="token punctuation">.</span>tareaNueva<span class="token punctuation">,</span> id<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">numeroAleatorio</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> tareas <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>TareasForm agregarTarea<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>agregarTarea<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>TableCmp tareasDatos<span class="token operator">=</span><span class="token punctuation">{</span>tareas<span class="token punctuation">}</span> borrarTarea<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>borrarTarea<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> Tareas</code></pre>\n      </div>\n<p>Creamos nuestro formulario <code class="language-text">TareasForm</code> en la ruta <code class="language-text">src/forms/TareasForm</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Form<span class="token punctuation">,</span> FormGroup<span class="token punctuation">,</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'reactstrap\'</span>\n\n<span class="token keyword">class</span> <span class="token class-name">TareasForm</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>initialState <span class="token operator">=</span> <span class="token punctuation">{</span>\n      tareaNueva<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>initialState\n  <span class="token punctuation">}</span>\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> event <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> target <span class="token punctuation">}</span> <span class="token operator">=</span> event\n    <span class="token keyword">const</span> value <span class="token operator">=</span> target<span class="token punctuation">.</span>value\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> target\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">:</span> value<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">submitForm</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">agregarTarea</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">)</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>initialState<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>Form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">submitForm</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>FormGroup<span class="token operator">></span>\n          <span class="token operator">&lt;</span>Input\n            type<span class="token operator">=</span><span class="token string">"text"</span>\n            name<span class="token operator">=</span><span class="token string">"tareaNueva"</span>\n            id<span class="token operator">=</span><span class="token string">"tareaNueva"</span>\n            value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>tareaNueva<span class="token punctuation">}</span>\n            placeholder<span class="token operator">=</span><span class="token string">"Nueva tarea"</span>\n            onChange<span class="token operator">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleChange</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">}</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>FormGroup<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Button className<span class="token operator">=</span><span class="token string">"float-right"</span> color<span class="token operator">=</span><span class="token string">"success"</span><span class="token operator">></span>\n          Agregar Tarea\n        <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token operator">></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> TareasForm</code></pre>\n      </div>\n<p>Creamos nuestro componente <code class="language-text">TableCmp</code> en la ruta <code class="language-text">src/components/TableCmp</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Table<span class="token punctuation">,</span> Alert<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'reactstrap\'</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">TableHeader</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>thead<span class="token operator">></span>\n      <span class="token operator">&lt;</span>tr<span class="token operator">></span>\n        <span class="token operator">&lt;</span>th<span class="token operator">></span>#<span class="token operator">&lt;</span><span class="token operator">/</span>th<span class="token operator">></span>\n        <span class="token operator">&lt;</span>th<span class="token operator">></span>Nombre<span class="token operator">&lt;</span><span class="token operator">/</span>th<span class="token operator">></span>\n        <span class="token operator">&lt;</span>th<span class="token operator">></span>Acción<span class="token operator">&lt;</span><span class="token operator">/</span>th<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>tr<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>thead<span class="token operator">></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">TableBody</span> <span class="token operator">=</span> props <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> rows <span class="token operator">=</span> props<span class="token punctuation">.</span>tareasDatos<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>row<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>tr key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>td<span class="token operator">></span><span class="token punctuation">{</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">></span>\n        <span class="token operator">&lt;</span>td<span class="token operator">></span><span class="token punctuation">{</span>row<span class="token punctuation">.</span>nombre<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">></span>\n        <span class="token operator">&lt;</span>td<span class="token operator">></span>\n          <span class="token operator">&lt;</span>Button\n            outline\n            color<span class="token operator">=</span><span class="token string">"danger"</span>\n            onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> props<span class="token punctuation">.</span><span class="token function">borrarTarea</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">}</span>\n          <span class="token operator">></span>\n            Borrar\n          <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>tr<span class="token operator">></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token keyword">return</span> <span class="token operator">&lt;</span>tbody<span class="token operator">></span><span class="token punctuation">{</span>rows<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>tbody<span class="token operator">></span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">TableCmp</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> tareasDatos<span class="token punctuation">,</span> borrarTarea <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>tareasDatos <span class="token operator">!==</span> undefined <span class="token operator">&amp;&amp;</span> tareasDatos<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token operator">&lt;</span>Table<span class="token operator">></span>\n          <span class="token operator">&lt;</span>TableHeader <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span>TableBody tareasDatos<span class="token operator">=</span><span class="token punctuation">{</span>tareasDatos<span class="token punctuation">}</span> borrarTarea<span class="token operator">=</span><span class="token punctuation">{</span>borrarTarea<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>Table<span class="token operator">></span>\n      <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token operator">&lt;</span>Alert color<span class="token operator">=</span><span class="token string">"info"</span><span class="token operator">></span>No existen tareas<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>Alert<span class="token operator">></span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> TableCmp</code></pre>\n      </div>\n<p>Finalmente tendremos ya maquetado y con una funcionalidad basica de nuestro proyecto react-tareas.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/react-tareas-maquetado-8d02933336ab381f1596626c36533b4e-90e0b.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 47.23958333333333%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAAAp0lEQVQoz52QSw7DIAxEuf/luuy6m65D+IPNFKiQKCSVEksjwGM/DAI34xXeeOzPJS+ICF0ppbYqpbAXEXHLdVXPbBLJB+hgIZ3C2F8lcs6YFUKA0hrMq8fWggu8x+yLnhzNBlQVyL8NpYa0AcfU9r1vZBwCvffYpDwGmu+El4AxRhhjQA2IdcKrQOdcm3D537tP7lpy9ZwIuU7+D4jJHKrOz8OFY3wAJ7PIxrngM3oAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="react tareas app"\n        title=""\n        src="/static/react-tareas-maquetado-8d02933336ab381f1596626c36533b4e-f8fb9.jpg"\n        srcset="/static/react-tareas-maquetado-8d02933336ab381f1596626c36533b4e-e8976.jpg 148w,\n/static/react-tareas-maquetado-8d02933336ab381f1596626c36533b4e-63df2.jpg 295w,\n/static/react-tareas-maquetado-8d02933336ab381f1596626c36533b4e-f8fb9.jpg 590w,\n/static/react-tareas-maquetado-8d02933336ab381f1596626c36533b4e-85e3d.jpg 885w,\n/static/react-tareas-maquetado-8d02933336ab381f1596626c36533b4e-d1924.jpg 1180w,\n/static/react-tareas-maquetado-8d02933336ab381f1596626c36533b4e-9452e.jpg 1770w,\n/static/react-tareas-maquetado-8d02933336ab381f1596626c36533b4e-90e0b.jpg 1920w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Puedes ver el <a href="https://guillermoparedes.github.io/react-tutorial/">demo</a>.</p>\n<p>En los siguientes posts, estaremos agregando más funcionalidades.</p>\n<p>Nos vemos. My Code Bad!</p>',
frontmatter:{title:"React.js - Parte 1",date:"September 01, 2018"}}},pathContext:{slug:"/react-parte-1/",previous:{fields:{slug:"/react-parte-0/"},frontmatter:{title:"React.js - Parte 0"}},next:null}}}});
//# sourceMappingURL=path---react-parte-1-ed44d1ef2a4180697ced.js.map