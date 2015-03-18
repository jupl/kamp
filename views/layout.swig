{% spaceless %}
  <!doctype html>
  <html>
    <head>
      {% block head %}
        <meta charset="UTF-8">
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
