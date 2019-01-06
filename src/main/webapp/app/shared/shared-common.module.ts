import { NgModule } from '@angular/core';

import { HospitalFrontSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [HospitalFrontSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [HospitalFrontSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class HospitalFrontSharedCommonModule {}
