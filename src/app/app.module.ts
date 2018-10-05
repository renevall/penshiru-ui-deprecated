import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { SearchComponent } from './feature/search/search.component';
import { SearchModule } from './feature/search/search.module';

@NgModule({
  declarations: [AppComponent, SearchComponent],
  imports: [BrowserModule, CoreModule, SharedModule, SearchModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
