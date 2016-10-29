---
layout: post
title: Telegram Bot with Apps Script
subtitle: Create a Telegram Bot without a server
author: Ós Córdova
color: 38b0e3
hero-image: /img/posts/2016-10-03-telegram-bot-with-apps-script/hero-2480.png
tile-image: /img/posts/2016-10-03-telegram-bot-with-apps-script/tile-480.png
tags: apps-script
uid: p-gas-telegram-bot
permalink: /blog/telegram-bot-with-apps-script
lang: en
js:
- js/zoom.js
---


[Google Apps Script](https://developers.google.com/apps-script) is a cloud scripting service based in JavaScript and makes it easy to do cool things with most of Google's products. Lately, I've been a big fan of its flexibility and versatility, for example with just a few lines of code you can interact with the [Telegram Bot API](https://core.telegram.org/bots/api) to control your bot, you won't have to worry about having a server, SSL certificates or configure ports 😏.
{: .lead}


## 🤔 What We Are Going to Do

Our goal is to create a simple Telegram bot that replies to a command with a random quote from [Quotes on Design](https://quotesondesign.com/).

You can test it just by starting a conversation with [DesignQuotesBot](https://telegram.me/DesignQuotesBot) and sending the command `/quote`.
![Telegram Bot Demo](/img/posts/2016-10-03-telegram-bot-with-apps-script/telegram-bot-demo.gif){:data-action="zoom"}

Now let's get started with the step by step instructions 😊


## 🤖 Meet BotFather

The first step is to talk to [BotFather](https://telegram.me/BotFather) to create and setup our bot, he will also give us our authorization token.

Sign in to Telegram from your favorite device and search for the account **BotFather** and start a conversation.

![Search for the user BotFather](/img/posts/2016-10-03-telegram-bot-with-apps-script/search-for-the-user-botfather.png){:data-action="zoom"}

Click the **Start** button.
![Start a conversation with BotFather](/img/posts/2016-10-03-telegram-bot-with-apps-script/start-conversation-with-botfather.png){:data-action="zoom"}

He will reply with the list of commands supported by BotFather.
![List of commands supported by BotFather](/img/posts/2016-10-03-telegram-bot-with-apps-script/list-of-commands-supported-by-botfather.png){:data-action="zoom"}

Create a new bot by sending the command `/newbot`. The BotFather will ask you for a **name**, we'll call our bot **Quotes on Design**.

>The name of your bot will be displayed in contact details and elsewhere.

![Give your bot a name](/img/posts/2016-10-03-telegram-bot-with-apps-script/give-your-bot-a-name.png){:data-action="zoom"}

Now, BotFather will ask you for a **username**, let it be **DesignQuotesBot**.

>The username is a short name, to be used in mentions and telegram.me links. Usernames are 5-32 characters long and are case insensitive, but may only include Latin characters, numbers, and underscores. **Your bot's username must end in ‘bot’, e.g. ‘tetris_bot’ or ‘TetrisBot’**.

![Give your bot a username](/img/posts/2016-10-03-telegram-bot-with-apps-script/give-your-bot-a-username.png){:data-action="zoom"}

BotFather will congratulate us, and give us an unique **authorization token**, it is a string along the lines of `297019760:AAFbL7yMus67Qv5Xu6fQ7VB93Jq4dkVaGP4`, this will be required to send requests to the [Bot API](https://core.telegram.org/bots/api).

![Authorization Token](/img/posts/2016-10-03-telegram-bot-with-apps-script/telegram-bot-token.png){:data-action="zoom"}

## 🤓 Ok, It's time to code!

Let's jump to Google Apps Script, grab your browser and visit [script.google.com/intro](https://script.google.com/intro) (You'll need to be signed in to your Google account.) You'll see the Script Editor with a **Blank project**, delete any code in the **Code.gs** file.

![Google Apps Script Blank Project](/img/posts/2016-10-03-telegram-bot-with-apps-script/create-your-google-apps-script-project.png){:data-action="zoom"}

Telegram Bot API currently supports two (mutually exclusive) ways of receiving updates. We can either use [long polling](https://core.telegram.org/bots/api#getupdates) or [Webhooks](https://core.telegram.org/bots/api#setwebhook), for this example we're going to use **Webhooks**, this means every time there is an update in for the bot (like when someone sends a command to our bot or add him to a group), they  will send an HTTP POST request to a specified URL containing a JSON-serialized [Update](https://core.telegram.org/bots/api#update).

So, we need to create an application to be able to respond to POST requests sent from the Bot API, the good news are that Google Apps Script would let us deploy our script as a [Web App](https://developers.google.com/apps-script/guides/web) that would let us interpret those request. 

When an user or a program (in this case de Bot API) sends to our script an HTTP Post request, Apps Script will run the special callback function **doPost(e)** so all we need to do is define that function in our script. The `e` argument represents an event parameter that contains the information of the request. As we mentioned above, the Bot API will send the POST request containing a JSON-serialized, this means we're gonna recieve an object converted into String, so we need to parse the text content of the POST body `e.postBody.contents` with the method [JSON.parse()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse).



{% highlight js %}
function doPost(e) {
  var update = JSON.parse(e.postData.contents);
}
{% endhighlight %}

When our script receives an update, in this case the command `/quote` the JSON-object should look similar to this example:

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

An incoming update can be of many types, for this example we're going to focus on bot commands, so first we need to make sure the update is type **message**, in JavaScript we can use the method [hasOwnProperty()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) to determine whether an object has the specified property.

Let's define two variables, the first one will be `chatId` here we're going to store the update's unique identifier for this chat, this will become handy when we want to reply with the quote to the correct conversation. The second will be the whole message property, we're going to name it `msg`.

{% highlight js %}
  if (update.hasOwnProperty('message')) {
    var msg = update.message;
    var chatId = msg.chat.id;
  }
{% endhighlight %}

Once we are sure the update is a message, we need to confirm the user sent a **command**, we can determine this by the field `type` in the [message entity](https://core.telegram.org/bots/api#messageentity). When a user sends a command to our bot this field will have the String `bot_command`.

The field **entities** contains an [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), remember that JavaScript Arrays are zero-indexed, so the first element is at the index 0, so to access the element `type` we need to use `msg.entities[0].type`.

Now we just need to confirm that command we received is `/quote`, by evaluating if `msg.text` is equal to `/quote`.

{% highlight js %}
if (msg.hasOwnProperty('entities') && msg.entities[0].type == 'bot_command') {

  // If the user sends the /quote command
  if (msg.text == '/quote') {

  }
}
{% endhighlight %}


At this point our **doPost()** function should look like this:

{% highlight js %}
function doPost(e) {
  var update = JSON.parse(e.postData.contents);

  // Make sure this is update is a type message
  if (update.hasOwnProperty('message')) {
    var msg = update.message;
    var chatId = msg.chat.id;

    // Make sure the update is a command.
    if (msg.hasOwnProperty('entities') && msg.entities[0].type == 'bot_command') {

      // If the user sends the /quote command
      if (msg.text == '/quote') {

      }
    }
  }
}
{% endhighlight %}

We're going to retrieve a random quote from [quotesondesign.com](http://quotesondesign.com/) so we can send it to the user. Fortunatelly the website has a JSON REST API, to get a random quote we can use the URL: `http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1`.

Google Apps Script can interact with APIs from all over the web, we can use the built-in [URL Fetch Service](https://developers.google.com/apps-script/reference/url-fetch/) with the method [fetch()](https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app#fetch(String)) to make a request to the URL mentioned above.

The same as the Bot API, we need to parse the response to work with a JSON Object.

{% highlight js %}
var url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
var data = UrlFetchApp.fetch(url);
var posts = JSON.parse(data);
{% endhighlight %}

The returned value would look like this:

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

The returned value is an Array, so we can use the JavaScript method [shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) it will remove the first element from an Array and returns that element.


{% highlight js %}
var post = posts.shift();
{% endhighlight %}

The Bot API supports basic formatting for messages, let's take advantage of this and format the quote, we're goinf to add quotations marks, an em dash and the author in bold.

>"No matter how cool your interface is, it would be better if there were less of it."
> **— Alan Cooper**

Notice the returned value contains HTML p tags, since Bot API does not support those tags, we need to remove them, we can achieve this with the JavaScript [replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) method and the [Regular expression](https://en.wikipedia.org/wiki/Regular_expression) `/<(?:.|\n)*?>/gm` [(explanation)](https://regex101.com/r/lL7tC7/1). Let's also get rid of the last line break `\n` with the regular expression `/\n/gm`.

{% highlight js %}
// Delete the html tags and \n (newline)
var cleanContent = post.content.replace(/<(?:.|\n)*?>/gm, "").replace(/\n/gm,"");

// Format the quote
var quote = '"'+cleanContent+'"\n — <strong>'+post.title+'</strong>';
{% endhighlight %}

The next step is to send the Bot API our request, for this we're also going to use the **URL Fetch Service** and the Bot API method [sendMessage](https://core.telegram.org/bots/api#sendmessage).

We need to define the POST body for the request containing the requiered parameters:

1. The `method` we're going to use, as we mentioned above `sendMessage`.
1. The `chat_id`, this is the unique identifier of the conversation to reply, we stored it in the `chatId` variable.
1. The `text` we want to send, that is in our `quote` variable.
1. The `parse_mode` with the value `HTML` because we're sending our text formatted with HTML.

{% highlight js %}
var payload = {
  'method': 'sendMessage',
  'chat_id': String(chatId),
  'text': quote,
  'parse_mode': 'HTML'
}
{% endhighlight %}

> Because **payload** is a JavaScript object, it will be interpreted as an HTML form. (We do not need to specify contentType; it will automatically default to either 'application/x-www-form-urlencoded' or 'multipart/form-data')


We also need to specify the HTTP method for the request, in this case Post.

{% highlight js %}
var data = {
  "method": "post",
  "payload": payload
}
{% endhighlight %}

To make the request we're going to use the method [fetch(url, params)](https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app#fetch(String,Object)). All queries to Telegram Bot API must be served over HTTPS to the endpoint: `https://api.telegram.org/bot<token>`. Here is where we're going to use the **token** we received from the BotFather.

{% highlight js %}
var API_TOKEN = '297019760:AAFbL7yMus67Qv5Xu6fQ7VB93Jq4dkVaGP4';
UrlFetchApp.fetch('https://api.telegram.org/bot' + API_TOKEN + '/', data);
{% endhighlight %}


## 💪 The Full Code

{% highlight js %}
function doPost(e) {
  var update = JSON.parse(e.postData.contents);

  // Make sure this is update is a type message
  if (update.hasOwnProperty('message')) {
    var msg = update.message;
    var chatId = msg.chat.id;

    // Make sure the update is a command.
    if (msg.hasOwnProperty('entities') && msg.entities[0].type == 'bot_command') {

      // If the user sends the /quote command
      if (msg.text == '/quote') {
        var url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
        var data = UrlFetchApp.fetch(url);
        var posts = JSON.parse(data);
        var post = posts.shift();
        
        // Delete the html tags and \n (newline)
        var cleanContent = post.content.replace(/<(?:.|\n)*?>/gm, "").replace(/\n/gm, "");
        
        // Format the quote
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

        // Replace with your token
        var API_TOKEN = '297019760:AAFbL7yMus67Qv5Xu6fQ7VB93Jq4dkVaGP4';
        UrlFetchApp.fetch('https://api.telegram.org/bot' + API_TOKEN + '/', data);
      }
    }
  }
}

{% endhighlight %}

## 🙄 Dude, Just Deploy It Already

To publish our script as a web app, we need to follow these steps:

1. Save our code with **File > Save**
1. In the **Script Editor**, select **Publish > Deploy as web app**.
1. Under **Project version**, select **New**, optionally set a description.
1. Under **Execute the app as**, select **Me**.
1. Under **Who has access to the app**, select **Anyone, even anonymous**.
1. Click **Deploy**.

![Deploy as Web App](/img/posts/2016-10-03-telegram-bot-with-apps-script/deploy-as-web-app-en.png){:data-action="zoom"}

Once we click **Deploy**, we'll see one of the authorization dialogs, we need to authorize our script to **Connect to an external services** because we're using the **URL Fetch Service**, click **Review Permissions** and then **Allow**.


![Authorization required](/img/posts/2016-10-03-telegram-bot-with-apps-script/authorization-required-en.png){:data-action="zoom"}
![Request for permission](/img/posts/2016-10-03-telegram-bot-with-apps-script/request-for-permission-en.png){:data-action="zoom"}

We'll see a new dialog indicating that your project has been successfully deployed as a web app. The dialog provides two URLs for your app, the first labeled **Current web app URL** and ends in `/exec` we're going to need this to set our **Webhook**.

The final step is to share the Bot API the URL they need to send the update requests, the easiest way is to open your browser and visit the following url:

`https://api.telegram.org/bot{API_TOKEN}/setWebHook?url={CURRENT_WEB_APP_URL}`

Replacing with `{API_TOKEN}` and `{CURRENT_WEB_APP_URL}` with our respective token and URL.

If everything turns out as planned 🤞, after visiting the url we'll see the response: `{"ok":true,"result":true,"description":"Webhook was set"}`

## 😎 Let's Test It!

We just need to open Telegram on any device, search for our bot and send the command `/quote`.

![Testing our bot](/img/posts/2016-10-03-telegram-bot-with-apps-script/testing-our-bot.png){:data-action="zoom"}

## 🙌 We’re done!

I hope this post gave you a better understanding of what we can achieve with Google Apps Script and a little more on how to create a Telegram Bot 😉.

## Further Reading and Related Links
- [Google Apps Script Official Documentation](https://developers.google.com/apps-script/)
- [Telegram Bot API](https://core.telegram.org/bots/api)
- [Source Code on GitHub](https://github.com/ocordova/gas-telegram-bot)