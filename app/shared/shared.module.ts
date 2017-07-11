import { NgModule } from '@angular/core';
import { StarComponent }  from '../shared/star.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule],
    declarations: [StarComponent],
    providers: [],
    exports:[
        CommonModule,
        FormsModule,
        StarComponent
    ]
})
export class SharedModule { }
