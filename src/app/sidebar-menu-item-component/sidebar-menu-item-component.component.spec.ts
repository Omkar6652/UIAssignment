import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuItemComponentComponent } from './sidebar-menu-item-component.component';

describe('SidebarMenuItemComponentComponent', () => {
  let component: SidebarMenuItemComponentComponent;
  let fixture: ComponentFixture<SidebarMenuItemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarMenuItemComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarMenuItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
