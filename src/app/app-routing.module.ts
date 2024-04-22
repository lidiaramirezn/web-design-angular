import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule)
  },
  { path: '**',
    redirectTo: '',
    pathMatch: 'full' }

  // Landing Page Layout -->
  /* { path: '',
    component: LandingComponent,
    children: [
      { path: '', component: MainComponent, pathMatch: 'full'},
      //{ path: 'shop', component: ShopComponent},
    ]
  }, */


  // Home Page Layout
  /*
  { path: '', component: HomeComponent, // HomeComponent is a Layout.
    children: [
      { path: 'balance', component: BalanceComponent},
      { path: 'asset', component: AssetComponent},

    ]
  },
  */

  // No Layout
  //{ path: 'signin', component: SigninComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
