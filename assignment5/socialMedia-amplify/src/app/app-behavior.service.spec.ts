import { TestBed } from '@angular/core/testing';

import { AppBehaviorService } from './app-behavior.service';

describe('UpdateBehaviorService', () => {
  let service: AppBehaviorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppBehaviorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
