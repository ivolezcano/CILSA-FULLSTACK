-- CREACION DE TABLAS

-- Tabla de usuarios
CREATE TABLE Usuario (
    IDusuario INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    contraseña TEXT
);

-- Tabla de tareas
CREATE TABLE Tarea (
    IDtarea INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT,
    descripcion TEXT,
    completada INTEGER DEFAULT 0  -- 0 para incompleta, 1 para completada
);

-- Tabla de relación usuario_tarea para muchos a muchos
CREATE TABLE usuario_tarea (
    IDusuario INTEGER,
    IDtarea INTEGER,
    PRIMARY KEY (IDusuario, IDtarea),
    FOREIGN KEY (IDusuario) REFERENCES Usuario(IDusuario),
    FOREIGN KEY (IDtarea) REFERENCES Tarea(IDtarea)
);

-- INSERCION DE DATOS

-- Usuarios
INSERT INTO Usuario (nombre, contraseña) VALUES ('Juan', 'password123');
INSERT INTO Usuario (nombre, contraseña) VALUES ('Maria', 'maria123');
INSERT INTO Usuario (nombre, contraseña) VALUES ('Pedro', 'securepass');

-- Tareas
INSERT INTO Tarea (titulo, descripcion, completada) VALUES ('Hacer las compras', 'Comprar frutas y verduras', 0);
INSERT INTO Tarea (titulo, descripcion, completada) VALUES ('Estudiar SQL', 'Repasar comandos básicos de SQL', 0);
INSERT INTO Tarea (titulo, descripcion, completada) VALUES ('Lavar el auto', 'Limpieza completa del coche', 1);
INSERT INTO Tarea (titulo, descripcion, completada) VALUES ('Pagar facturas', 'Pagar agua y electricidad', 0);
INSERT INTO Tarea (titulo, descripcion, completada) VALUES ('Llamar al médico', 'Agendar turno para chequeo', 1);

-- Relación usuario_tarea
INSERT INTO usuario_tarea (IDusuario, IDtarea) VALUES (1, 1);
INSERT INTO usuario_tarea (IDusuario, IDtarea) VALUES (2, 1);
INSERT INTO usuario_tarea (IDusuario, IDtarea) VALUES (1, 2);
INSERT INTO usuario_tarea (IDusuario, IDtarea) VALUES (2, 3);
INSERT INTO usuario_tarea (IDusuario, IDtarea) VALUES (2, 4);
INSERT INTO usuario_tarea (IDusuario, IDtarea) VALUES (3, 5);

-- AGREGAR NUEVAS TAREAS
-- Insertar una nueva tarea en la tabla Tarea
INSERT INTO Tarea (titulo, descripcion) 
VALUES ('Titulo de la tarea', 'Descripcion de la tarea');
-- Asociar la tarea recién creada con un usuario específico
INSERT INTO usuario_tarea (IDusuario, IDtarea) 
VALUES (1, LAST_INSERT_ROWID());

-- MARCAR TAREAS COMO COMPLETADAS
UPDATE Tarea 
SET completada = 1 
WHERE IDtarea = 1;

-- EDITAR TAREAS EXISTENTES
UPDATE Tarea 
SET titulo = 'Nuevo título de la tarea' descripcion = 'Nueva descripcion'
WHERE IDtarea = 1;

-- ELIMINAR TAREAS
DELETE FROM Tarea 
WHERE IDtarea = 1;

-- LISTAR TAREAS
SELECT nombre, titulo, descripcion, completada
FROM usuario_tarea r
INNER JOIN Tarea t
ON r.IDtarea = t.IDtarea
INNER JOIN Usuario u
ON r.IDusuario = u.IDusuario;