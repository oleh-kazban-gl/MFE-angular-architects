import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Legacy NgModule kept as stub. App is bootstrapped via bootstrapApplication in bootstrap.ts.
@NgModule({
  imports: [AppComponent, HomeComponent, NotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

