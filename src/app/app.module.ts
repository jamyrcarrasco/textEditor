import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfomaintenanceComponent } from './infomaintenance/infomaintenance.component';
import { ReclamacionesboComponent } from './reclamacionesbo/reclamacionesbo.component';
import { GeneralinfoComponent } from './generalinfo/generalinfo.component';

const appRoutes: Routes = [
  { path: 'information', component: InfomaintenanceComponent },
  { path: 'reclamacionesbo', component: ReclamacionesboComponent},
  { path: 'InformacionGeneral', component: GeneralinfoComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    InfomaintenanceComponent,
    ReclamacionesboComponent,
    GeneralinfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


