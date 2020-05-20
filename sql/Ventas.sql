CREATE TABLE IF NOT EXISTS Ventas(
  id INTEGER PRIMARY KEY,
  Fecha DATE,
  Articulo INTEGER,
  Cantidad FLOAT,
  Valor_Total FLOAT,
  Descuento FLOAT,
  FOREIGN KEY(Articulo) REFERENCES Inventario(id)
);
