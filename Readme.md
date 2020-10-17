# INVENTARIO TECHNOGI

Antes de realizar las configuraciones correspondientes, se da por hecho que ya
se encuentran instaladas y configuradas las siguientes herramientas:
1. Node Package Manager (NPM última versión).
2. MySQL Server (última versión), debe permitir conexiones remotas con el usuario
   que se vaya a utilizar.
3. Cliente MySQL de su preferencia.

Al momento de clonar el proyecto, se debe de tener en cuenta la ubicación local 
de la carpeta, a partir de ahora le llamaremos **$REPO**

## MySQL
1. Entrar al cliente de MySQL y conectarse a MySQL Server.
2. Una vez establecida la conexión, ejecutar los siguientes comandos:
	```
	CREATE DATABASE Inventario;

	USE DATABASE Inventario;

	CREATE TABLE Producto(
		Id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
		Nombre Varchar(255), 
		Costo Float(5,2) NOT NULL, 
		Iva Float(5,2) NOT NULL, 
		Precio Float(5,2) NOT NULL
	);
	```

## Back-end
1. Desde línea de comandos, acceder a **$REPO/InventoryServer**
2. Ejecutar el comando `npm install`
3. Desde el explorador de archivos, abrir el archivo **$REPO/InventoryServer/src/index.js**
4. Editar los valores de **host, user, password y port** (utilizar los valores que se utilizan
   para establecer la conexión a MySQL Server)
5. Guardar y cerrar el archivo.
6. Repetir paso 1 de la sección ***Back-end***
7. Ejecutar el comando `node src/index.js` (no cerrar la ventana de línea de comandos)
8. Si las configuraciones de MySQL son correctas, se levantará el servicio sin errores,
   en caso contrario, favor de revisar las configuraciones (regresar al paso 4)
9. Copiar puerto que se imprime una vez que se levanta el servicio

## Front-end
1. Desde línea de comandos, acceder a **$REPO/InventoryFront**
2. Ejecutar el comando `npm install`
3. Desde el explorador de archivos, abrir los siguientes archivos:
   - **$REPO/InventoryServer/src/environments/environment.ts**
   - **$REPO/InventoryServer/src/environments/environment.prod.ts**
4. Siguiendo el paso anterior, cambiar el valor de la propiedad **port** en ambos archivos
   por el que se copió en el **paso 9** del apartado **Back-end**
5. Guardar y cerrar los archivos.
6. Repetir paso 1 de la sección ***Front-end***
7. Ejecutar el comando `ng build`
8. Ejecutar el comando `ng serve` (se mostrará la url con la cual se puede acceder a la
   aplicación desde el navegador, por ejemplo ***http://localhost:4200***),  
   (no cerrar la ventana de línea de comandos)
9. Si se requiere ejecutar las **Pruebas Unitarias**, se tiene que realizar lo siguiente:
	- Repetir paso 1 de la sección ***Front-end***
	- Ejecutar el comando `ng test`