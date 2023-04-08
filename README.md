## Creación de tsconfig
1. Agregar en package.json el script `"tsc": "tsc"`
2. Ejecutar por comando el código `npm run tsc -- -- init`

## Creación del compilado
1. Ejecutar el código `npm run tsc`

## Ejecutar proyecto
1. Agregar en package.json el script `"start": "node build/main.js"`,
2. Ejecutar por comando el código `npm start`

## Paquetes
1. `ts-node-dev` sirve para ejecutar y que recargue los cambios en automatico. Se agrego el script `"dev": "ts-node-dev src/main.ts"`