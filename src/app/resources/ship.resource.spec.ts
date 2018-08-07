import { TestBed, inject } from '@angular/core/testing';
import {ShipResource} from './ship.resource';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('AlgoService', () => {
  let httpMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      providers: [ShipResource]
    });

    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([ShipResource], (service: ShipResource) => {
    expect(service).toBeTruthy();
  }));

  it('Should return list of ships', () => {
     const shipResource: ShipResource = TestBed.get(ShipResource);

    const responseStub = {
      results: [
        {name: 'A', model: 'model a'},
        {name: 'B', model: 'model b'},
      ]
    };
    shipResource.getShips().subscribe( result => {
      expect(result).toEqual(responseStub);
    });

    const req = httpMock.expectOne('https://swapi.co/api/starships/');
    req.flush(responseStub);
  });

  afterEach(() => {
    httpMock.verify();
  });
});

