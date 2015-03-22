{% spaceless %}
  <!doctype html>
  <html class="no-js">
    <head>
      {% block head %}
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="initial-scale=1.0">
        <title>{% block title %}Website{% endblock %}</title>
        {% block styles %}<link rel="stylesheet" href="/styles/common.css">{% endblock %}
      {% endblock %}
    </head>

    <body>
      {% block body %}{% endblock %}
      {% block scripts %}<script src="/scripts/common.js"></script>{% endblock %}
    </body>
  </html>
{% endspaceless %}
