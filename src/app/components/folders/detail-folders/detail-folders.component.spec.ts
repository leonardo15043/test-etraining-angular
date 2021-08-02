import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFoldersComponent } from './detail-folders.component';

describe('DetailFoldersComponent', () => {
  let component: DetailFoldersComponent;
  let fixture: ComponentFixture<DetailFoldersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFoldersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
