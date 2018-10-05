import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [BrowserAnimationsModule, MatCardModule],
  exports: [BrowserAnimationsModule, MatCardModule],
  declarations: []
})
export class MaterialModule {}
