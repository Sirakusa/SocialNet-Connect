practica

se esta creando una red social donde se quieren crear post y poder comentar en ellos
para esto se necesita un servidor que permita realizar las operaciones crud para

- post
- comentarios

La entidad Post debe contener

- AuthorName
- description
- id

La entidad Comments Debe contener

- comment
- id
- postId

deben existir los endpoints REST para Comments y para Post

Puntos Extra
[] Tratar de usar service/controller/repository
[] Crear una clase para cada entidad (Post/Comment) como el repository (PostRepository, CommentRepository)
[] Al Hacer GetPost por Id traer hasta 5 comentarios que pudiese tener el post por lo que el JSON de respuesta seria asi
Ejemplo Respuesta

- AuthorName
- Description
- id
- comments
  - comment
  - id
  - postId
