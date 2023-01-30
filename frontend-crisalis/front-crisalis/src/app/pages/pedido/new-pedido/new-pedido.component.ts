import { TokenService } from './../../../services/token.service';
import { DtoOrderDetails } from './../../../Models/dtoOrderDetails';
import { ServicioServicesService } from './../../../services/servicio-services.service';
import { ProductoServicesService } from './../../../services/producto-services.service';
import { EmpresaServicesService } from './../../../services/empresa-services.service';
import { ClienteServicesService } from './../../../services/cliente-services.service';
import { Producto } from 'src/app/Models/producto';
import { Empresa } from './../../../Models/empresa';
import { PedidosServicesService } from './../../../services/pedidos-services.service';
import { OrderE } from './../../../Models/ordere';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Models/cliente';
import { OrderDetail } from 'src/app/Models/orderDetail';
import { Servicio } from 'src/app/Models/servicio';
import { literalMap } from '@angular/compiler';


@Component({
  selector: 'app-new-pedido',
  templateUrl: './new-pedido.component.html',
  styleUrls: ['./new-pedido.component.scss']
})
export class NewPedidoComponent {
  //Espacio para agregar los otros modelos
  listaClientes: Cliente[] = []
  listaEmpresas: Empresa[] = []
  listaProductos: Producto[] = []
  listaServicios: Servicio[] = []
  listaDetalles: DtoOrderDetails[] = []

  constructor(private router: Router, private pedidoServices: PedidosServicesService,
    private clienteServices: ClienteServicesService,
    private empresaServices: EmpresaServicesService,
    private productosServices: ProductoServicesService,
    private serviciosServices: ServicioServicesService,
    private tokenService: TokenService
    ){

  }


  ngOnInit(): void{
    this.cargarEmpresas()
    this.cargarClientes()
    this.cargarProductos()
    this.cargarServicios()
    this.cargarDetalles()

    if (this.tokenService.getToken()) {
      this.esta_logeado = true;
    } else{
      this.esta_logeado = false;
    }
  }


  //Espacio para variables locales
  esEmpresa: boolean = false
  isSelectedCliente: boolean = false
  isSelectedEmpresa: boolean = false
  esta_logeado: boolean = false

  esClienteOEmpresa(){

    if(!this.esEmpresa){
      this.esEmpresa =true
      console.log('Es empresa')
      this.vaciarEmpresa();

    }
    else {
      this.esEmpresa = false
      console.log('No es empresa')
      this.vaciarCliente();
    }

  }




  fechaPedido: string = ""
  totalPedido: number = 0
  activo: boolean = false
  garantia: number = 0
  cantidad: number = 0
  cliente!: Cliente
  empresa!: Empresa
  orderDetails: OrderDetail[] = []



  cargarClientes(){
    this.clienteServices.listaClientes().subscribe(data => {this.listaClientes = data;})
  }
  cargarEmpresas(){
    this.empresaServices.lista().subscribe(data => {this.listaEmpresas = data;})
  }
  cargarProductos(){
    this.productosServices.listaProductos().subscribe(data => {this.listaProductos = data;})
  }
  cargarServicios(){
    this.serviciosServices.lista().subscribe(data => {this.listaServicios = data;})
  }
  cargarDetalles(){
    this.listaDetalles
  }
  clienteAux = new Cliente( "", "", "")
  empresaAux = new Empresa ("","","","","","")

  vaciarCliente(){
    this.clienteAux.dniCliente = ""
    this.clienteAux.apellido = ""
    this.clienteAux.nombre = ""
    this.isSelectedCliente = false
    console.log(this.clienteAux.dniCliente + " dni")
  }
   vaciarEmpresa() {
        this.empresaAux.razonSocial = ""
        this.empresaAux.cuit = ""
        this.isSelectedEmpresa = false
        console.log(this.empresaAux.cuit + " cuit")
  }

  getCliente(dniCliente: string,nombre : string, apellido: string){

    if(!this.esEmpresa){
      this.clienteAux.dniCliente = dniCliente
      this.clienteAux.apellido = apellido
      this.clienteAux.nombre = nombre
       this.isSelectedCliente = true
    } else {
      this.vaciarCliente();
    }
  }

  getEmpresa(razonSocial: string, cuit: string){
    if(this.esEmpresa){
      this.empresaAux.razonSocial = razonSocial
      this.empresaAux.cuit = cuit
      this.isSelectedEmpresa = true
    } else {
      this.vaciarEmpresa()
    }
  }
   //dtoOrderDetails = new DtoOrderDetails("",0,0,0,false,0)

  getProducto(nombre: string, precioBase: number){
    let dtoOrderDetails: DtoOrderDetails = {
      nombre:"",
      cantidad: 0,
      garantia: 0,
      precioVenta: 0,
      esServicio: false,
      precioSoporte: 0

    }
    dtoOrderDetails.nombre = nombre
    dtoOrderDetails.cantidad = 1
    dtoOrderDetails.garantia = 1
    dtoOrderDetails.precioVenta = precioBase
    dtoOrderDetails.esServicio = false
    dtoOrderDetails.precioSoporte = 0

    this.listaDetalles.push(dtoOrderDetails)

  }
  getServicio(nombre: string, precioBase: number, soportePrecio: number){

  }



  onCreate(){
    const order = new OrderE(this.fechaPedido, this.totalPedido, this.activo, this.cliente, this.empresa, this.orderDetails)
    this.pedidoServices.save(order).subscribe(
      data =>{

        //this.router.navigate([''])
        window.location.reload();

      }, err => {
        //alert("Hubo un error al cargar")
        window.location.reload();
      }
      )
  }
}


