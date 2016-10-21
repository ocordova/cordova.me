---
layout: page
title: Blog
subtitle: A collection of my thoughts
description: A collection of my thoughts about design or development
lang: en
uid: blog
color: 4CAF50
---

<div class="blog">
{% assign posts = site.posts | where:"lang", page.lang %}
{% for post in posts %}
  <div class="post mdl-grid mdl-grid--no-spacing mdl-shadow--3dp">
  <div class=" mdl-cell mdl-cell--4-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone">
  <a href="{{ post.url }}">
  <div class="mdl-card__media" class="post__tile" style="background-image: url('{{ post.tile-image }} '); background-color: #{{ post.color }};">
  </div>
  </a>
  </div>
  <div class="mdl-card mdl-cell mdl-cell--8-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone">
    <div class="mdl-card__supporting-text">
      <div class="post__title"><a href="{{ post.url }}">{{ post.title }}</a></div>
      <div class="post__subtitle mdl-color-text--grey-600">
      {{ post.subtitle }}
      </div>
      <div class="post__date mdl-color-text--grey-400">
      {% include date.html %}
      </div>
      <div class="post__content">
      {{ post.content | strip_html | truncatewords: 30 }}
      </div>
    </div>
    <div class="mdl-card__actions">
      <a href="{{ post.url }}" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-typography--text-uppercase">
      {{ site.read_more[page.lang] }}
      <svg class="icon-chevron-right" viewBox="0 0 24 24">
          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
      </a>
    </div>
  </div>
  </div>
{% endfor %}
</div>