import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'wps/portal/portal-recaudadores-banco/web',
    pathMatch: 'full',
  },

  /**
   * Home
   */
  // no login
  {
    path: 'wps/portal/portal-recaudadores-banco/web',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  // login
  {
    path: 'wps/myportal/portal-recaudadores-banco/web',
    // canActivate: [authGuard],
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },

  /**
   * Inicio de sesion
   */
  {
    path: 'wps/portal/portal-recaudadores-banco/web/login',
    // canActivate: [publicGuard],
    loadComponent: () => import('./pages/login/login.component').then((m) => m.LoginComponent),
  },

  /**
   * Que puedo hacer
   */
  {
    path: 'wps/myportal/portal-recaudadores-banco/web/que-puedo-hacer',
    // canActivate: [authGuard],
    loadComponent: () => import('./pages/options-user/options-user.component').then((m) => m.OptionsUserComponent),
  },

  /**
   * Ayuda
   */
  {
    path: 'wps/myportal/portal-recaudadores-banco/web/opciones-perfil/ayuda',
    // canActivate: [authGuard],
    loadComponent: () => import('./pages/help/help.component').then((m) => m.HelpComponent),
  },

  /**
   * Consulta de convenios
   */
  {
    path: 'wps/myportal/portal-recaudadores-banco/web/opciones-perfil/consulta-convenios',
    // canActivate: [authGuard],
    loadChildren: () => loadRemoteModule('mf-agreement-inquiry', './routes').then((m) => m.routes),
  },

  /**
   * Consulta de transacciones
   */
  {
    path: 'wps/myportal/portal-recaudadores-banco/web/opciones-perfil/consulta-transacciones',
    // canActivate: [authGuard],
    loadChildren: () => loadRemoteModule('mf-transaction-inquiry', './routes').then((m) => m.routes),
  },

  /**
   * Descarga de archivo de recaudo / Descarga de archivo de recaudo convenios API
   */
  {
    path: 'wps/myportal/portal-recaudadores-banco/web/opciones-perfil/reporte-pagos',
    // canActivate: [authGuard],
    loadChildren: () => loadRemoteModule('mf-collection-download', './routes').then((m) => m.routes),
  },

  /**
   * Cargue archivo facturacion plantilla
   */
  {
    path: 'wps/myportal/portal-recaudadores-banco/web/opciones-perfil/cargar-facturacion-plantilla',
    // canActivate: [authGuard],
    loadChildren: () => loadRemoteModule('mf-invoice-upload', './routes').then((m) => m.routes),
  },

  /**
   * Consulta envio archivo
   */
  {
    path: 'wps/myportal/portal-recaudadores-banco/web/opciones-perfil/consultar-carga',
    // canActivate: [authGuard],
    loadChildren: () => loadRemoteModule('mf-file-tracking', './routes').then((m) => m.routes),
  },
];
