let anyVar: any; // no se recomienda

anyVar = true
anyVar = undefined
anyVar = 'string'
anyVar = null
anyVar = 21

let newVar: boolean = anyVar

console.log(newVar.valueOf())

let unknownVar: unknown; // permite asignar cualquier tipo, pero fuerza a hacer una verificación de tipos

if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase() // verificación de tipo
}

if (typeof unknownVar === 'boolean') {
  let inNewV2 = unknownVar // verificación de tipo
}


const parse = (str: string): unknown => {
  return JSON.parse(str)
}


