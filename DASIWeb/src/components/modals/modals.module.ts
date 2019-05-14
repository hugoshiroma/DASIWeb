import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// externals components
import { RegisterModalComponent } from './register-modal/register-modal.component';

@NgModule({
    declarations: [ RegisterModalComponent ],
    imports: [ CommonModule ],
    exports: [ RegisterModalComponent ],
    providers: [],
})

export class ModalsModule {}
