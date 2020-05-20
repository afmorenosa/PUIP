CREATE TABLE IF NOT EXISTS Compras(
  id INTEGER PRIMARY KEY,
  Fecha DATE,
  Articulo INTEGER,
  Cantidad FLOAT,
  Precio_Unitario_Compra FLOAT,
  Valor_Total_Compra FLOAT,
  Iva FLOAT,
  Precio_Unitario_Venta FLOAT,
  Proveedor INTEGER,
  FOREIGN KEY(Proveedor) REFERENCES Proveedores(id),
  FOREIGN KEY(Articulo) REFERENCES Inventario(id)
);
