import { ClienteService } from './cliente.service';
import { Component } from "@angular/core";
import { Cliente } from "./cliente";

@Component({
  selector: "app-cliente",
  templateUrl: "./cliente.component.html",
  styleUrls: ["./cliente.component.css"]
})
export class ClienteComponent {

Cliente: Cliente[]

constructor(private clienteService:ClienteService) {}
ngOnInit() {
   this.clienteService.getClientes().subscribe(
    (Clientse) =>
    {
      this.Cliente = Clientse
    }

   );
}
}
