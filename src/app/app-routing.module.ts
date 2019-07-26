import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDataComponent } from './pokemon-data/pokemon-data.component';

const routes: Routes = [
  { path: '', component: PokemonListComponent },
  { path: 'pokemon', component: PokemonDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
