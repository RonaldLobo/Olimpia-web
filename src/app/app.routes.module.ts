import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { GimnasiosComponent } from './gimnasios/gimnasios.component';
import { MiGimnasioComponent } from './gimnasios/mi-gimnasio/mi-gimnasio.component';
import { EditarGimnasioComponent } from './gimnasios/editar-gimnasio/editar-gimnasio.component';

export const ROUTES: Routes = [
    { 
        path: '',  
        component: HomeComponent
    },
    { 
        path: 'gimnasios',  
        component: GimnasiosComponent
    },
    { 
        path: 'editar-gimnasio',  
        component: EditarGimnasioComponent
    },
    { 
        path: 'mi-gimnasio',  
        component: MiGimnasioComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    { 
        path: '**', 
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            ROUTES,
            { 
                preloadingStrategy: PreloadAllModules, 
                useHash: true
            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule { }