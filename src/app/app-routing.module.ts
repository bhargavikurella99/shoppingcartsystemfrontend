import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/security/auth-guard.service';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';


const routes: Routes = [{
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
},
{
    path: 'login',
    loadChildren: () =>
        import('./auth/auth.module').then(m => m.AuthDataModule)
},
{
    path: 'home',
    component: NavBarComponent,
    canActivateChild: [
        AuthGuard
    ],
    children: [{
            path: 'initial',
            loadChildren: () =>
                import('./home/initial-page/initial-page.module').then(
                    m => m.InitialPageModule,
                )
        },
        {
            path: 'customer',
            loadChildren: () =>
                import('./customer/customer.module').then(
                    m => m.CustomerModule,
                )
        },
        {
            path: 'product',
            loadChildren: () =>
                import('./product/product.module').then(
                    m => m.ProductModule,
                )
        }
    ]
}
];
@NgModule({
imports: [
    RouterModule.forRoot(routes)
],
exports: [
    RouterModule
]
})
export class AppRoutingModule {

}

