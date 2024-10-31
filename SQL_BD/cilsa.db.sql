BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Tarea" (
	"IDtarea"	INTEGER,
	"titulo"	TEXT,
	"descripcion"	TEXT,
	"completada"	INTEGER,
	PRIMARY KEY("IDtarea" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Usuario" (
	"contraseña"	TEXT,
	"IDusuario"	INTEGER,
	"nombre"	TEXT,
	PRIMARY KEY("IDusuario" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "usuario_tarea" (
	"IDusuario"	INTEGER,
	"IDtarea"	INTEGER,
	FOREIGN KEY("IDtarea") REFERENCES "Tarea"("IDtarea"),
	FOREIGN KEY("IDusuario") REFERENCES "Usuario"("IDusuario")
);
INSERT INTO "Tarea" VALUES (1,'Hacer las compras','Comprar frutas y verduras',0);
INSERT INTO "Tarea" VALUES (2,'Estudiar SQL','Repasar comandos básicos de SQL',0);
INSERT INTO "Tarea" VALUES (3,'Lavar el auto','Limpieza completa del coche',1);
INSERT INTO "Tarea" VALUES (4,'Pagar facturas','Pagar agua y electricidad',0);
INSERT INTO "Tarea" VALUES (5,'Llamar al médico','Agendar turno para chequeo',1);
INSERT INTO "Usuario" VALUES ('password123',1,'Juan');
INSERT INTO "Usuario" VALUES ('maria123',2,'Maria');
INSERT INTO "Usuario" VALUES ('securepass',3,'Pedro');
INSERT INTO "usuario_tarea" VALUES (1,1);
INSERT INTO "usuario_tarea" VALUES (2,1);
INSERT INTO "usuario_tarea" VALUES (1,2);
INSERT INTO "usuario_tarea" VALUES (2,3);
INSERT INTO "usuario_tarea" VALUES (2,4);
INSERT INTO "usuario_tarea" VALUES (3,5);
COMMIT;
