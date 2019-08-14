import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoanComponent } from './layout/loan/loan.component';
import { SettlementComponent } from './layout/settlement/settlement.component';


export const routes = {
  NEWS_GROUP: {
      name: '',
      path: 'emi',
      children: [
          {
              path: 'loan',
              component: LoanComponent,
              data: {
                  name: ' ',
                  display: false
              }
          },
          {
              path: 'settlement',
              component: SettlementComponent,
              data: {
                  name: '',
                  display: false
              }
          }
      ] as Routes
  }
};

const matchAll: Route = {
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
};

@NgModule({
  imports: [RouterModule.forRoot([matchAll]), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}