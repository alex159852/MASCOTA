import { Routes } from "@angular/router";
import { NgModule } from '@angular/core';

import {  RouterModule } from '@angular/router';

import { MascotaComponent } from "src/app/components/mascota/mascota.component";
import { NuevamascotaComponent } from "src/app/components/mascota/nuevamascota/nuevamascota.component";

//export 
const AdminLayoutRoutes:Routes=[
   
  {
        path:'mascota',
        component:MascotaComponent
    },
    {
        path:'mascotaform',
        component:NuevamascotaComponent
    },
    {
        path:'mascotaform/:id',
        component:NuevamascotaComponent
    },

]
@NgModule({
    imports: [RouterModule.forChild(AdminLayoutRoutes)],
    exports: [RouterModule]
})
export class AdminLayoutRoutesR{}