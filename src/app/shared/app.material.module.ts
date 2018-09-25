/**
 * This file import all the material module required from @angular/material
 */
import { NgModule } from '@angular/core';
import {
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatButtonModule,
    MatTooltipModule,
    MatSelectModule,
    MatCardModule,
    MatProgressSpinnerModule
} from '@angular/material';


@NgModule({
    imports: [
        MatNativeDateModule,
        MatInputModule,
        MatFormFieldModule,
        MatTabsModule,
        MatButtonModule,
        MatTooltipModule,
        MatSelectModule,
        MatCardModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatNativeDateModule,
        MatInputModule,
        MatFormFieldModule,
        MatTabsModule,
        MatButtonModule,
        MatTooltipModule,
        MatSelectModule,
        MatCardModule,
        MatProgressSpinnerModule
    ],
    providers: [],
    bootstrap: []
})
export class AppMaterialModule { }
