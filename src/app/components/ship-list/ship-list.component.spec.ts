import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShipListComponent } from './ship-list.component';
import {ShipResource} from '../../resources/ship.resource';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('ShipListComponent', () => {
  let component: ShipListComponent;
  let fixture: ComponentFixture<ShipListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      declarations: [ ShipListComponent ],
      providers: [ ShipResource ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should set shipList when loaded', () => {
    const resource = TestBed.get(ShipResource);
    const fakeFuncion = () => {};
    const objectSub = {results: [{name: 'A', model: 'M'}]};

    // spyOn(resource, 'getShips').and.callFake(fakeFuncion);
    spyOn(resource, 'getShips').and.returnValue(of(objectSub));
    fixture.detectChanges();

    expect(component.shipList).toEqual(objectSub.results);


  });

});
