import { NgModule } from '@angular/core';

import { SearchRoutingModule } from './search-routing.module';
import { SearchBoxComponent } from './search-box/search-box.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [CoreModule, SharedModule, SearchRoutingModule],
  declarations: [SearchComponent, SearchBoxComponent]
})
export class SearchModule {}
