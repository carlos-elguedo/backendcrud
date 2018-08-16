# backendcrud

Api rest para las operaciones CRUD sobre la colección 'providers'


Iniciar api para desarrollo:
  + npm run dev

Obtener todos los documentos:
  GET: /api/rest/providers/

Obtener un documento especifico
  GET: /api/rest/providers/id_provider
  
Editar un documento especifico
  PUT: /api/rest/providers/id_provider
  BODY: JSON - Todos los datos del documento a actualizar

Crear un documento
  POST: /api/rest/providers/
  BODY: JSON - Todos los datos del documento a crear
  
Eliminar un documento
  DELETE: /api/rest/providers/id_provider


NOTA: La coleccion estaba con campos (field) repetitivos y algunos vacios, así que tome algunos, los que mas aparecián fueron:
    address
    city
    createdAt
    createdBy
    document
    email
    firstName
    fullName
    lastName
    name
    projectedStartDate
    specialty
    status
    updateAt
