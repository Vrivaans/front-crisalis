import { TestBed } from '@angular/core/testing';

import { EmpresaServicesService } from './empresa-services.service';

describe('EmpresaServicesService', () => {
  let service: EmpresaServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpresaServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
