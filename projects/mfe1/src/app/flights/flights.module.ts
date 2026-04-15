import { NgModule } from '@angular/core';
import { FlightsSearchComponent } from './flights-search/flights-search.component';

// Legacy NgModule kept as stub. Routes are now exposed directly via flights.routes.ts.
@NgModule({
  imports: [FlightsSearchComponent],
  exports: [FlightsSearchComponent]
})
export class FlightsModule { }

