'use strict';

(function() {
  const navLinks = document.getElementsByClassName("navLinks");
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function swapSelected() {
      let selected = this.innerHTML;
      const articles = document.getElementById("content");

      if (selected === "JAVASCRIPT") {
        articles.innerHTML = '';
        const javascript = new XMLHttpRequest();
        javascript.addEventListener("load", function() {
          const responseText = JSON.parse(this.responseText).data.children;

          for (let i = 0; i < responseText.length; i++) {
            let article = document.createElement("div");
            article.className = "article";
            let articles = document.getElementById("content");
            articles.appendChild(article);

            let thumbnail = document.createElement('img');
            thumbnail.className = "contentPictures";
            thumbnail.src = responseText[i].data.thumbnail;
            article.appendChild(thumbnail);

            let title = document.createElement("h3");
            title.className = "title";
            title.innerHTML = responseText[i].data.title;
            article.appendChild(title);

            let author = document.createElement("h6");
            title.className = "author";
            author.innerHTML = "by " + responseText[i].data.author + " &#xb7; " + moment.unix(responseText[i].data.created_utc).fromNow() + " &#xb7; " + responseText[i].data.ups + " views";
            article.appendChild(author);

            let selfText = document.createElement("p");
            selfText.className = "selfText";
            selfText.innerHTML = responseText[i].data.selftext.substring(0, 130) + "...";
            article.appendChild(selfText);

            let url = document.createElement("a");
            url.className = "url";
            url.href = responseText[i].data.url;
            url.innerHTML = responseText[i].data.url.substring(0, 28);
            url.target = '_blank';
            article.appendChild(url);
          }
        });
        javascript.open("GET", "https://www.reddit.com/r/javascript/.json");
        javascript.send();
      }
      if (selected === "JOEROGAN") {
        articles.innerHTML = '';
        const joerogan = new XMLHttpRequest();
        joerogan.addEventListener("load", function() {
          const responseText = JSON.parse(this.responseText).data.children;

          for (let i = 0; i < responseText.length; i++) {
            let article = document.createElement("div");
            article.className = "article";
            let articles = document.getElementById("content");
            articles.appendChild(article);

            let thumbnail = document.createElement('img');
            thumbnail.className = "contentPictures";
            thumbnail.src = responseText[i].data.thumbnail;
            article.appendChild(thumbnail);

            let title = document.createElement("h3");
            title.className = "title";
            title.innerHTML = responseText[i].data.title;
            article.appendChild(title);

            let author = document.createElement("h6");
            title.className = "author";
            author.innerHTML = "by " + responseText[i].data.author + " &#xb7; " + moment.unix(responseText[i].data.created_utc).fromNow() + " &#xb7; " + responseText[i].data.ups + " views";
            article.appendChild(author);

            let selfText = document.createElement("p");
            selfText.className = "selfText";
            selfText.innerHTML = responseText[i].data.selftext.substring(0, 130) + "...";
            article.appendChild(selfText);

            let url = document.createElement("a");
            url.className = "url";
            url.href = responseText[i].data.url;
            url.innerHTML = responseText[i].data.url.substring(0, 28);
            url.target = '_blank';
            article.appendChild(url);
          }
        });
        joerogan.open("GET", "https://www.reddit.com/r/joerogan/.json");
        joerogan.send();
      }
      if (selected === "NOPIXEL") {
        articles.innerHTML = '';
        const nopixel = new XMLHttpRequest();
        nopixel.addEventListener("load", function() {
          const responseText = JSON.parse(this.responseText).data.children;

          for (let i = 0; i < responseText.length; i++) {
            let article = document.createElement("div");
            article.className = "article";
            let articles = document.getElementById("content");
            articles.appendChild(article);

            let thumbnail = document.createElement('img');
            thumbnail.className = "contentPictures";
            thumbnail.src = responseText[i].data.thumbnail;
            article.appendChild(thumbnail);

            let title = document.createElement("h3");
            title.className = "title";
            title.innerHTML = responseText[i].data.title;
            article.appendChild(title);

            let author = document.createElement("h6");
            title.className = "author";
            author.innerHTML = "by " + responseText[i].data.author + " &#xb7; " + moment.unix(responseText[i].data.created_utc).fromNow() + " &#xb7; " + responseText[i].data.ups + " views";
            article.appendChild(author);

            let selfText = document.createElement("p");
            selfText.className = "selfText";
            selfText.innerHTML = responseText[i].data.selftext.substring(0, 130) + "...";
            article.appendChild(selfText);

            let url = document.createElement("a");
            url.className = "url";
            url.href = responseText[i].data.url;
            url.innerHTML = responseText[i].data.url.substring(0, 28);
            url.target = '_blank';
            article.appendChild(url);
          }
        });
        nopixel.open("GET", "https://www.reddit.com/r/nopixel/.json");
        nopixel.send();
      }
      if (selected === "RANDOM") {
        articles.innerHTML = '';
        const random = new XMLHttpRequest();
        random.addEventListener("load", function() {
          const responseText = JSON.parse(this.responseText).data.children;

          for (let i = 0; i < responseText.length; i++) {
            let article = document.createElement("div");
            article.className = "article";
            let articles = document.getElementById("content");
            articles.appendChild(article);

            let thumbnail = document.createElement('img');
            thumbnail.className = "contentPictures";
            thumbnail.src = responseText[i].data.thumbnail;
            article.appendChild(thumbnail);

            let title = document.createElement("h3");
            title.className = "title";
            title.innerHTML = responseText[i].data.title;
            article.appendChild(title);

            let author = document.createElement("h6");
            title.className = "author";
            author.innerHTML = "by " + responseText[i].data.author + " &#xb7; " + moment.unix(responseText[i].data.created_utc).fromNow() + " &#xb7; " + responseText[i].data.ups + " views";
            article.appendChild(author);

            let selfText = document.createElement("p");
            selfText.className = "selfText";
            selfText.innerHTML = responseText[i].data.selftext.substring(0, 130) + "...";
            article.appendChild(selfText);
          
            let url = document.createElement("a");
            url.className = "url";
            url.href = responseText[i].data.url;
            url.innerHTML = responseText[i].data.url.substring(0, 28);
            url.target = '_blank';
            article.appendChild(url);
          }
        });
        random.open("GET", "https://www.reddit.com/r/popular/.json");
        random.send();
      }
    });
  }
})();