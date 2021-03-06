# Embedding covid-bot.com to your website.
# Description
This is a simple solution to add covid-bot.com to your website.

covid-bot.com is an AI-powered chatbot created by Innaton Technologies Ltd. and it can answer any question related
to COVID-19, provide real-time data and much more.


# How it looks like

Example of how it looks like on our website http://innaton.com (you can test it there live)

![covid-bot embedded innaton](static/embedded-innaton.gif)



# Instructions

Copy the code in "covid-embedded.hmtl" and paste it right before the end of the body of your websites' HTML (before the ```</body>``` tag)

That's it! Now your users can benefit from covid-bot.com

Adblockers might cause the chatbot embedding to work in unexpected way. If you see any issues, try accessing it from Incognito. If it works, then it's definetely the adblocker considering the fetch of some files and images as a false-positive.

# IMPORTANT: Please follow the 2nd approach OR simply copy the "embedded-full.html" as rawcdn githack service is having issues

Here's the code:
```
    
<link rel="stylesheet" href="https://rawcdn.githack.com/waelmas/covid-bot/e05cbbfd3fbe8a0c9d705584588ce11ea11a2e35/static/covid-embed.css">


    <div class="covid-out" id="covid-bot-outer" style="display: none;">
       
        <div style="height: 100%;">
            <a href="javascript:closeFrame();"><img class="close-image" src="https://github.com/waelmas/covid-bot/blob/master/static/img/close2.png?raw=true">
            </a>

        <iframe id="covid-frame"  src="https://covid-bot.com/chat" scrolling="yes" class="embedded-chat" sandbox="allow-scripts allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-top-navigation">
        </iframe> 

        </div>
        </div>

<div id="covid-chat" class="covid-chat"> <a href="javascript:openFrame();"><img class="chat-icon" style="max-width: 5%; float: right;" src="https://github.com/waelmas/covid-bot/blob/master/static/img/covid-chat.png?raw=true">
</a></div>

<script type="text/javascript" src="https://rawcdn.githack.com/waelmas/covid-bot/e05cbbfd3fbe8a0c9d705584588ce11ea11a2e35/static/covid-embed.js"></script>


```

**NOTE:** If your website has security config that prevents importing .css and .js scripts from other sources, then you can copy the JS script and the CSS code and include them as well in your HTML code AND doe not forget to delete the first and last line of the above code (```<link ... >``` & ```<script ... ></script>```).

Put the JS script between the ```<script>``` tags and the CSS code between the ```<style>``` tags:

JS code: https://github.com/waelmas/covid-bot/blob/master/static/covid-embed.js

CSS code: https://github.com/waelmas/covid-bot/blob/master/static/covid-embed.css

```
 <style>
  --- CSS CODE GOES HERE ---
 </style
 
 --- EMBEDDING CODE GOES HERE ---
 
 <script type="text/javascript">
  --- JS CODE GOES HERE ---
 </script
```

If you need help do not hesitate to reach out to info@covid-bot.com or info@innaton.com

**You liked it? --> Show some love and "Star" this repository. 
(If you share covid-bot.com or this repo with your friends then you're even more awesome!)**


# IMPORTANT

No one is allowed to charge users for the usage of covid-bot.com UNLESS they have a written agreement with us first.
For info reach me at: info@covid-bot.com OR info@innaton.com

It is your legal responsibility to add the cookies mentioned in our original cookies-policy to your own cookies policy.
https://covid-bot.com/cookies
