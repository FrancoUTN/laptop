import { TestBed } from '@angular/core/testing';

import { MediadorService } from './mediador.service';

describe('MediadorService', () => {
  let service: MediadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
