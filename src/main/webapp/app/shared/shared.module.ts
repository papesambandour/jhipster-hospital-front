import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { HospitalFrontSharedLibsModule, HospitalFrontSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [HospitalFrontSharedLibsModule, HospitalFrontSharedCommonModule],
    declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [JhiLoginModalComponent],
    exports: [HospitalFrontSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HospitalFrontSharedModule {
    static forRoot() {
        return {
            ngModule: HospitalFrontSharedModule
        };
    }
}
