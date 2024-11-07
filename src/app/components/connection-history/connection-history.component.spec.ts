import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionHistoryComponent } from './connection-history.component';

describe('ConnectionHistoryComponent', () => {
  let component: ConnectionHistoryComponent;
  let fixture: ComponentFixture<ConnectionHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectionHistoryComponent]
    });
    fixture = TestBed.createComponent(ConnectionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
