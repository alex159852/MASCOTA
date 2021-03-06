import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/model/mascota';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from 'src/app/services/mascota.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-nuevamascota',
  templateUrl: './nuevamascota.component.html',
  styleUrls: ['./nuevamascota.component.css']
})
export class NuevamascotaComponent implements OnInit {

  item:Mascota=new Mascota();
  seccion='mascota';
  edit:boolean=false;
  constructor(private dbProd:MascotaService,
      private router:Router,
      private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:any)=>{
      if(params.id){
        this.edit=true;
        this.item.key=params.id
        this.dbProd.getItem(params.id).snapshotChanges().subscribe(a=>{
          console.log(a.payload.data());
          let prod:any;
          prod=a.payload.data();
          this.item= Object.assign(
            { 
              key:a.payload.id,
              nombre:prod.nombre,
              especie:prod.especie,
              raza:prod.raza,
              sexo:prod.sexo,
              color:prod.color,
              foto:prod.color,
            }
          );
        });
        
      }else
      {
        this.edit=false;
        console.log("nuevo!!!!")
        
      }
    });
  }
  enviar(){
    if(this.edit){
      this.dbProd.edit((String)(this.item.key),this.item);
    }else{

      this.dbProd.add(this.item).then(a=>{
        console.log("datos server",a);
      });
    }
    Swal.fire({ title: 'Datos guardados',
        confirmButtonText: 'Ok',
      }).then((result) => {
        if (result.isConfirmed) {}
        this.router.navigate(['/'+this.seccion]);
    });
    
  } 
  salir(){}

}
