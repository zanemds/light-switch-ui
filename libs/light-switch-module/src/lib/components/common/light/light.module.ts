import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatRippleModule } from '@angular/material/core';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { LightComponent } from './light.component';

@NgModule({
  declarations: [LightComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSliderModule,
    FormsModule,
    MatRippleModule
  ],
  exports: [LightComponent]
})
export class LightModule {}
