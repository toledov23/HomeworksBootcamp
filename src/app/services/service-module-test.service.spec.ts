import { TestBed } from '@angular/core/testing';

import { ServiceModuleTestService } from './service-module-test.service';

describe('ServiceModuleTestService', () => {
  let service: ServiceModuleTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceModuleTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
