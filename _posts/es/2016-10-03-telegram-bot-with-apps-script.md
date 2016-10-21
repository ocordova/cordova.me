---
layout: post
title: Bot de Telegram con Apps Script
subtitle: Crea un Bot de Telegram sin un servidor
author: Ós Córdova
color: 38b0e3
hero-image: /img/posts/2016-10-03-telegram-bot-with-apps-script/hero-2480.png
tile-image: /img/posts/2016-10-03-telegram-bot-with-apps-script/tile-480.png
tags: apps-script
uid: p-gas-telegram-bot
permalink: /es/blog/bot-de-telegram-con-apps-script
lang: es
js:
- js/zoom.js
---


[Google Apps Script](https://developers.google.com/apps-script) es un servicio en la nube basado en JavaScript y hace sencillo hacer cosas interesantes con la mayoría de los productos de Google. Últimamente, he sido un gran fan de su flexibilidad y versatilidad, por ejemplo con sólo unas cuantas líneas de código se puede interactuar con el [API de Telegram Bot](https://core.telegram.org/bots/api) para controlar tu bot, no tendrás que preocuparte por tener un servidor, certificados SSL o configurar puertos 😏.
{: .lead}

## 🤔 Lo que vamos a hacer

Nuestro objetivo es crear un simple bot de Telegram que responda a un comando con una cita aleatoria de [Quotes on Design](https://quotesondesign.com/).

Puedes probarlo con tan sólo iniciar una conversación con [DesignQuotesBot](https://telegram.me/DesignQuotesBot) y enviar el comando `/quote`.
![Telegram Bot Demo](/img/posts/2016-10-03-telegram-bot-with-apps-script/telegram-bot-demo.gif){:data-action="zoom"}

Ahora empecemos con las instrucciones paso a paso 😊


## 🤖 Conoce a BotFather

El primer paso es hablar con [BotFather](https://telegram.me/BotFather) para crear y configurar nuestro bot, él también nos dará nuestra token de autorización.

Inicia sesión en Telegram desde tu dispositivo favorito, busca la cuenta **BotFather** y comienza una conversación.

![Buscar la cuenta BotFather](/img/posts/2016-10-03-telegram-bot-with-apps-script/search-for-the-user-botfather.png){:data-action="zoom"}

Haz clic en el botón **Start**.
![Inicia una conversación con BotFather](/img/posts/2016-10-03-telegram-bot-with-apps-script/start-conversation-with-botfather.png){:data-action="zoom"}

Él responderá con la lista de comandos soportados por BotFather.
![Lista de comandos soportados por BotFather](/img/posts/2016-10-03-telegram-bot-with-apps-script/list-of-commands-supported-by-botfather.png){:data-action="zoom"}

Crea un nuevo bot enviando el comando `/newbot`. BotFather te preguntará por un **nombre**, vamos a llamar a nuestro bot **Quotes on Design**.

>El nombre de tu bot se mostrará en los datos de contacto y en otros lugares.

![Ponle un nombre a tu bot](/img/posts/2016-10-03-telegram-bot-with-apps-script/give-your-bot-a-name.png){:data-action="zoom"}

Ahora, BotFather te preguntará por un **nombre de usuario**, que sea **DesignQuotesBot**.

>El nombre de usuario es un nombre corto para ser utilizado en las menciones y enlaces telegram.me. Los nombres de usuario son de 5-32 caracteres de longitud y son sensibles a mayúsculas, pero sólo pueden incluir caracteres latinos, números y guiones bajos. **El nombre de usuario debe terminar en ‘bot’, ej. ‘tetris_bot’ o ‘TetrisBot’**.

![Dale un nombre de usuario a tu bot](/img/posts/2016-10-03-telegram-bot-with-apps-script/give-your-bot-a-username.png){:data-action="zoom"}

BotFather nos felicitará, y nos da un **token de autorización**, es una cadena de caracteres similar a `297019760:AAFbL7yMus67Qv5Xu6fQ7VB93Jq4dkVaGP4`, esta será necesaria para enviar peticiones al [Bot API](https://core.telegram.org/bots/api).

![Token de autorización](/img/posts/2016-10-03-telegram-bot-with-apps-script/telegram-bot-token.png){:data-action="zoom"}

## 🤓 Ok, ¡Es hora de codificar!

Saltemos a Google Apps Script, abre tu navegador y visita [script.google.com/intro](https://script.google.com/intro) (Tendrás que iniciar sesión en tu cuenta de Google.) Verás el Script Editor con un **proyecto en blanco**, elimina cualquier código en el archivo **Code.gs**.

![Google Apps Script Blank Project](/img/posts/2016-10-03-telegram-bot-with-apps-script/create-your-google-apps-script-project.png){:data-action="zoom"}

Telegram Bot API actualmente soporta dos formas (mutuamente excluyentes) de recepción de peticiones. Podemos utilizar [Long polling](https://core.telegram.org/bots/api#getupdates) o [Webhooks](https://core.telegram.org/bots/api#setwebhook), para este ejemplo vamos a utilizar **Webhooks**, esto significa que cada vez que hay una petición para el bot (como cuando alguien envía un comando a nuestro bot o lo agregue a un grupo), ellos enviarán una petición HTTP POST a la URL especificada conteniendo una [petición](https://core.telegram.org/bots/api#update) en una cadena JSON.

Por lo tanto, tenemos que crear una aplicación para poder responder a las peticiones POST enviadas desde la Bot API, la buena noticia es que Google App Script permite a desplegar nuestro script como una [Aplicación Web](https://developers.google.com/apps-script/guides/web) que nos permitirá interpretar esas peticiones.

Cuando un usuario o un programa (en este caso el Bot API) envía a nuestro script de una petición HTTP Post, Apps Script ejecutará la función callback 
**doPost(e)** así que lo que tenemos que hacer es definir esa función en nuestro script. El argumento `e` representa un parámetro de evento que contiene la información de la petición. Como lo mencioné anteriormente, el Bot API enviará una petición conteniendo una cadena JSON, esto significa que vamos a recibir un objeto convertido en texto, por lo que necesitamos transformar el contenido del cuerpo de la petición POST `e.postBody.contents` con el método [JSON.parse()](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/JSON/parse)

{% highlight js %}
function doPost(e) {
  var update = JSON.parse(e.postData.contents);
}
{% endhighlight %}

Cuando nuestro script reciba una petición, en este caso el comando `/quote` el objeto JSON debe ser similar a este ejemplo:

{% highlight js %}
{
   "update_id":926604562,
   "message":{
      "message_id":357,
      "from":{
         "id":10610041,
         "first_name":"Jane Doe",
         "username":"janedoe"
      },
      "chat":{
         "id":10610041,
         "first_name":"Jane Doe",
         "username":"janedoe",
         "type":"private"
      },
      "date":1473910635,
      "text":"/quote",
      "entities":[
         {
            "type":"bot_command",
            "offset":0,
            "length":6
         }
      ]
   }
}
{% endhighlight %}

Una petición entrante puede ser de muchos tipos, para este ejemplo nos vamos a centrar en los comandos del bot, por lo que primero tenemos que asegurarnos de que la petición es de tipo **message**, en JavaScript podemos utilizar el método [hasOwnProperty()](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/hasOwnProperty) para determinar si un objeto tiene una propiedad en específico.

Definamos dos variables, la primera será  `chatId` aquí vamos a almacenar el identificador único de este chat, esto no será muy útil cuando queramos responder con la cita a la conversación correcta. La segunda será la propiedad del mensaje completo, vamos a llamarla `msg`.


{% highlight js %}
  if (update.hasOwnProperty('message')) {
    var msg = update.message;
    var chatId = msg.chat.id;
  }
{% endhighlight %}

Una vez que estamos seguros de que la petición es un mensaje, necesitamos confirmar que el usuario envió un **comando**, podemos determinar esto por el campo `type` en la [entidad mensaje](https://core.telegram.org/bots/api#messageentity). Cuando un usuario envíe un comando a nuestro bot este campo tendrá la cadena `bot_command`.

El campo **entities** contiene un [Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array), recuerda que los Arrays en JavaScript se indexan en cero, por lo que el primer elemento se encuentra en el índice 0, por lo que para acceder al elemento `type` tenemos que utilizar `msg.entities[0].type`.

Ahora sólo tenemos que confimrar que el comando que hemos recibido es `/quote`, evaluando si `msg.text` es igual a `/quote`.

{% highlight js %}
if (msg.hasOwnProperty('entities') && msg.entities[0].type == 'bot_command') {

  // Si el usuario envió el comando /quote
  if (msg.text == '/quote') {

  }
}
{% endhighlight %}


En este punto nuestra función **doPost()** debería tener este aspecto:

{% highlight js %}
function doPost(e) {
  var update = JSON.parse(e.postData.contents);

  // Asegurar que la petición es del tipo mensaje
  if (update.hasOwnProperty('message')) {
    var msg = update.message;
    var chatId = msg.chat.id;

    // Asegurar que la petición es un comando
    if (msg.hasOwnProperty('entities') && msg.entities[0].type == 'bot_command') {

      // Si el usuario envió el comando /quote
      if (msg.text == '/quote') {

      }
    }
  }
}
{% endhighlight %}

Vamos a obtener una cita aleatoria de [quotesondesign.com](http://quotesondesign.com/) para que podamos enviarla al usuario. Afortunadamente, el sitio web tiene una API REST JSON, para obtener la cita aleatoria podemos utilizar la URL: `http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1`.

Google Apps Script puede interactuar con las API de la web, para esto podemos usar el servicio integrado [URL Fetch Service](https://developers.google.com/apps-script/reference/url-fetch/) con el método [fetch()](https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app#fetch(String)) para hacer una petición a la URL mencionada anteriormente.

Lo mismo que para la Bot API, tenemos que transformar la respuesta para trabajar con un objeto JSON.

{% highlight js %}
var url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
var data = UrlFetchApp.fetch(url);
var posts = JSON.parse(data);
{% endhighlight %}

El valor devuelto se debe ver algo así:

{% highlight js %}
[
  {
    "ID": 1588,
    "title": "Alan Cooper",
    "content": "<p>No matter how cool your interface is, it would be better if there were less of it.<\/p>\n",
    "link": "https:\/\/quotesondesign.com\/alan-cooper-2\/"
  }
]
{% endhighlight %}

El valor devuelto es un Array, por lo que podemos utilizar el método de JavaScript [shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) que elimina el primero elemento de un Array y devuelve dicho elemento.


{% highlight js %}
var post = posts.shift();
{% endhighlight %}

La Bot API es compatible con el formato básico para mensajes, vamos a tomar ventaja de esto y dar formato a la cita, vamos a añadir comillas, un guión y el autor en negritas.

>"No matter how cool your interface is, it would be better if there were less of it."
> **— Alan Cooper**

Notemos que el valor devuelto contiene etiquetas p de HTML, ya que la Bot API no es compatible con esas etiquetas, hay que eliminarlas, podemos lograr esto con el método JavaScript [replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) y la [Expresión Regular](https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular) `/<(?:.|\n)*?>/gm` [(explicación)](https://regex101.com/r/lL7tC7/1). También vamos a deshacernos del último salto de línea `\n` con la expresión regular `/\n/gm`.

{% highlight js %}
// Eliminar las etiquetas html y \n (salto de línea)
var cleanContent = post.content.replace(/<(?:.|\n)*?>/gm, "").replace(/\n/gm,"");

// Dar formato a la cita
var quote = '"'+cleanContent+'"\n — <strong>'+post.title+'</strong>';
{% endhighlight %}

El siguiente paso es enviar la Bot API nuestra petición, para esto también vamos a utilizar el servicio **URL Fetch Service** y el método [sendMessage](https://core.telegram.org/bots/api#sendmessage) del Bot API.

Tenemos que definir el cuerpo de la petición POST que contiene los parámetros necesarios:

1. El método que vamos a usar, como lo mencionamos anteriormente es `sendMessage`.
1. El `chat_id`, aquí el identificador único de la conversación para responder, que lo almacenamos en la variable `chatId`.
1. En `text` colocamos el texto que queremos enviar, que se encuentra en nuestra variable `quote`.
1. En `parse_mode` colocamos el valor `HTML` debido a que estamos enviando nuestro texto con formato HTML..

{% highlight js %}
var payload = {
  'method': 'sendMessage',
  'chat_id': String(chatId),
  'text': quote,
  'parse_mode': 'HTML'
}
{% endhighlight %}

> Debido a que **payload** es un objeto JavaScript, es interpretado como una `form` de HTML. (No es necesario especificar el contentType; será identificado automáticamente por defecto como 'application/x-www-form-urlencoded' o 'multipart/form-data')


También tenemos que especificar el método HTTP para la petición, en este caso Post.

{% highlight js %}
var data = {
  "method": "post",
  "payload": payload
}
{% endhighlight %}

Para realizar la petición vamos a utilizar el método [fetch(url, params)](https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app#fetch(String,Object)). Todas las peticiones a la Bot API deben ser enviadas a través de HTTPS al endpoint: `https://api.telegram.org/bot<token>`. Aquí es donde vamos a utilizar el **token** que recibimos del BotFather.

{% highlight js %}
var API_TOKEN = '297019760:AAFbL7yMus67Qv5Xu6fQ7VB93Jq4dkVaGP4';
UrlFetchApp.fetch('https://api.telegram.org/bot' + API_TOKEN + '/', data);
{% endhighlight %}


## 💪 El código completo

{% highlight js %}
function doPost(e) {
  var update = JSON.parse(e.postData.contents);

  // Asegurar que la petición es del tipo mensaje
  if (update.hasOwnProperty('message')) {
    var msg = update.message;
    var chatId = msg.chat.id;

    // Asegurar que la petición es un comando
    if (msg.hasOwnProperty('entities') && msg.entities[0].type == 'bot_command') {

      // Si el usuario envió el comando /quote
      if (msg.text == '/quote') {
        var url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
        var data = UrlFetchApp.fetch(url);
        var posts = JSON.parse(data);
        var post = posts.shift();
        
        // Eliminar las etiquetas html y \n (salto de línea)
        var cleanContent = post.content.replace(/<(?:.|\n)*?>/gm, "").replace(/\n/gm, "");
        
        // Dar formato a la cita
        var quote = '"' + cleanContent + '"\n — <strong>' + post.title + '</strong>';

        var payload = {
          'method': 'sendMessage',
          'chat_id': String(chatId),
          'text': quote,
          'parse_mode': 'HTML'
        }

        var data = {
          "method": "post",
          "payload": payload
        }

        // Reemplazar con tu token
        var API_TOKEN = '297019760:AAFbL7yMus67Qv5Xu6fQ7VB93Jq4dkVaGP4';
        UrlFetchApp.fetch('https://api.telegram.org/bot' + API_TOKEN + '/', data);
      }
    }
  }
}

{% endhighlight %}

## 🙄 Hey, Ya Publícala

Para publicar nuestro script como una aplicación web, es necesario seguir los siguientes pasos:

1. Guarda nuestro código con **Archivo > Guardar**
1. En el **Script Editor**, selecciona **Publicar > Implementar como aplicación web**.
1. En **Versión del proyecto**, selecciona **Nuevo**, opcionalmente coloca una descripción.
1. En **Ejecutar la aplicación como**, selecciona **Yo**.
1. En **Quién tiene acceso a la aplicación**, selecciona **Cualquier persona, incluso de forma anónima**.
1. Clic en **Implementar**.

![Publicar como aplicación web](/img/posts/2016-10-03-telegram-bot-with-apps-script/deploy-as-web-app-es.png){:data-action="zoom"}

Una vez que hagamos clic en **Implementar**, vamos a ver un diálogo de autorización, necesitamos autorizar nuestro script para que **se conecta a un servicio externo**, ya que estamos usando **URL Fetch Service**, haz clic en **Revisar permisos** y luego en **Permitir**.

![Se requiere autorzación](/img/posts/2016-10-03-telegram-bot-with-apps-script/authorization-required-es.png){:data-action="zoom"}
![Solicitud de Permiso](/img/posts/2016-10-03-telegram-bot-with-apps-script/request-for-permission-es.png){:data-action="zoom"}

Veremos un nuevo diálogo que indica que su proyecto ha sido implementado con éxito como una aplicación web. El diálogo proporciona dos direcciones URL nuestra aplicación, la primera etiquetada como **URL actual de la aplicación web** y termina en `/exec` vamos a necesitar esta para establecer nuestro **Webhook**.

El último paso es compartir a la Bot API la URL que necesita para enviar las peticiones de actualización, la forma más fácil es abrir el navegador y visitar la siguiente URL:

`https://api.telegram.org/bot{API_TOKEN}/setWebHook?url={URL_ACTUAL_DE_LA_APLICACIÓN}`

Sustituyendo `{API_TOKEN}` y `{URL_ACTUAL_DE_LA_APLICACIÓN}` con nuestra respectiva token y URL.

Si todo sale según lo previsto 🤞, después de visitar la URL veremos la respuesta: `{"ok":true,"result":true,"description":"Webhook was set"}`

## 😎 ¡Vamos a probarla!

Sólo tenemos que abrir Telegram en cualquier dispositivo, buscar nuestro bot y enviar el comando `/quote`.

![Probando nuestro bot](/img/posts/2016-10-03-telegram-bot-with-apps-script/testing-our-bot.png){:data-action="zoom"}

## 🙌 ¡Hemos terminado!

Espero que esto te haya ayudado a comprender mejor lo que podemos lograr con Google Apps Script y un poco más acerca de cómo crear un bot de Telegram 😉.

## Lectura adicional y enlaces de interés

- [Documentación Oficial de Google Apps Script](https://developers.google.com/apps-script/)
- [Bot API de Telegram](https://core.telegram.org/bots/api)
- [Código fuente en GitHub](https://github.com/ocordova/gas-telegram-bot)