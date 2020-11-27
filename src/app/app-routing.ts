// Importar los modulos del router de Angular

import { ModuleWithProviders } from '@angular/core';
import { from } from 'rxjs';
import { Routes, RouterModule} from '@angular/router';

// importar los componentes a los que voy a hacer una pagina

import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
<<<<<<< HEAD
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';

=======
>>>>>>> eb23bbe677b67b86e0e7fa9f30a9101905ce219f

// Array de rutas

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/articulo/:id', component: ArticleComponent},
    {path: 'buscar/:search', component: SearchComponent},
<<<<<<< HEAD
    {path: 'blog/crear', component: ArticleNewComponent},
    {path: 'blog/editar/:id', component: ArticleEditComponent},
=======
>>>>>>> eb23bbe677b67b86e0e7fa9f30a9101905ce219f
    {path: 'formulario', component: FormularioComponent},
    {path: 'peliculas', component: PeliculasComponent},
    {path: 'pagina-de-pruebas', component: PaginaComponent},
    {path: 'pagina-de-pruebas/:nombre', component: PaginaComponent},
    {path: '**', component: ErrorComponent}
];

// Exportar el modulo de rutas

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);