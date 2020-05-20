CREATE TABLE IF NOT EXISTS Inventario(
  id INTEGER PRIMARY KEY,
  Nombre TEXT,
  Categoria TEXT,
  Precio_Venta FLOAT,
  Precio_Compra FLOAT,
  Cantidad FLOAT,
  Unidad TEXT,
  Descripcion TEXT,
  Proveedor INTEGER,
  Ubicacion TEXT,
  FOREIGN KEY(Proveedor) REFERENCES Proveedores(id)
);
