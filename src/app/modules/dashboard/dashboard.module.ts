import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './page/dashboard/dashboard.component';

import { SidebarModule } from 'primeng/sidebar'
import { ToolbarModule } from 'primeng/toolbar'
import { ChartModule } from 'primeng/chart';

import { RouterModule } from '@angular/router';
import { DASHBOARD_ROUTES } from './dashboard.routing';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CookieService } from 'ngx-cookie-service';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(DASHBOARD_ROUTES),
    SidebarModule,
    ButtonModule,
    ToolbarModule,
    ToastModule,
    ChartModule,
    SharedModule
  ],
  providers: [MessageService, CookieService]
})
export class DashboardModule { }
