db = db.getSiblingDB("admin")

db.createUser({
  user: "usuario_db",
  pwd: "usuario_db",
  roles: [
    { role: "read", db: "usuario_db" },
    { role: "readWrite", db: "usuario_db" },
    { role: "dbAdmin", db: "usuario_db" }
  ],
  mechanisms: ["SCRAM-SHA-1","SCRAM-SHA-256"]
})

db = db.getSiblingDB("usuario_db")

db.persona.insertMany([
  {
    "_id": NumberInt(112233445),
    "nombre": "Juan",
    "apellido": "Gomez",
    "genero": "M",
    "edad": NumberInt(45),
    "_class": "co.edu.javeriana.as.personapp.mongo.document.PersonaDocument"
  },
  {
    "_id": NumberInt(556677889),
    "nombre": "Lucia",
    "apellido": "Martinez",
    "genero": "F",
    "_class": "co.edu.javeriana.as.personapp.mongo.document.PersonaDocument"
  },
  {
    "_id": NumberInt(998877665),
    "nombre": "Carlos",
    "apellido": "Hernandez",
    "genero": "M",
    "edad": NumberInt(52),
    "_class": "co.edu.javeriana.as.personapp.mongo.document.PersonaDocument"
  },
  {
    "_id": NumberInt(223344556),
    "nombre": "Ana",
    "apellido": "Lopez",
    "genero": "F",
    "edad": NumberInt(22),
    "_class": "co.edu.javeriana.as.personapp.mongo.document.PersonaDocument"
  },
  {
    "_id": NumberInt(667788990),
    "nombre": "Sofia",
    "apellido": "Diaz",
    "genero": "F",
    "edad": NumberInt(19),
    "_class": "co.edu.javeriana.as.personapp.mongo.document.PersonaDocument"
  }
], { ordered: false })
