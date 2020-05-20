CREATE TABLE IF NOT EXISTS Proveedores(
  id INTEGER PRIMARY KEY,
  Nombre TEXT UNIQUE,
  Telefono TEXT,
  Direccion TEXT,
  Identificacion TEXT,
  Tags TEXT
);
