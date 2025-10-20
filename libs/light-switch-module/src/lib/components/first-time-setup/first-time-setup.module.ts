import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatStepperModule } from '@angular/material/stepper';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FirstTimeSetupRoutingModule } from './first-time-setup-routing.module';
import { FirstTimeSetupComponent } from './first-time-setup.component';

@NgModule({
  declarations: [FirstTimeSetupComponent],
  imports: [
    CommonModule,
    FirstTimeSetupRoutingModule,
    MatStepperModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule
  ]
})
export class FirstTimeSetupModule {}
