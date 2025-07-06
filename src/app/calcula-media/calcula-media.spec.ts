import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculaMedia } from './calcula-media';

describe('CalculaMedia', () => {
  let component: CalculaMedia;
  let fixture: ComponentFixture<CalculaMedia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculaMedia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculaMedia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
