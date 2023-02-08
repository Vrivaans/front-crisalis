export class ServiciosContratados {
  //Datos del cliente
  id?:number
  nombre!: string
  apellido!: string
  dniCliente!: string
  //Datos de la empresa
  razonSocial!: string
  cuit!: string
  //Datos del servicio
  nombreServicio!: string
  precioBase!: number
  soportePrecio!: number
  activo!: boolean

  constructor(id: number, nombre: string, apellido: string, dniCliente: string,
    nombreServicio: string, precioBase: number, soportePrecio: number, activo: boolean){
      this.id = id
      this.nombre = nombre
      this.apellido = apellido
      this.dniCliente = dniCliente
      this.nombreServicio = nombreServicio
      this.precioBase = precioBase
      this.soportePrecio = soportePrecio
      this.activo = activo
    }

}
