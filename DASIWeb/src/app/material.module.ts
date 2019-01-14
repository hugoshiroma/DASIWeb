import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
    exports: [MatFormFieldModule, MatInputModule, MatButtonModule]
})

export class MaterialModule { }
