<!DOCTYPE html>

<html>
<head>
  <title>Geckotronics</title>
  {{template "base/head.html" .}}
</head>

<body>
  <!--Import jQuery before materialize.js-->
  <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script type="text/javascript" src="../static/js/materialize.min.js"></script>
  <div class="container">
    {{template "base/navbar.html" .}}

    {{template "base/footer.html" .}}
  </div>

  </body>
</html>

{{define "meta"}}{{end}}
