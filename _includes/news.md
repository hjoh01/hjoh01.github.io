<ul style="margin:0 0 20px;">
{% for item in site.data.news.main %}
  <li style="margin-bottom:6px;"><strong>[{{ item.date }}]</strong> {{ item.content }}</li>
{% endfor %}
</ul>
