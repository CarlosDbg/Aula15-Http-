import { TestBed } from '@angular/core/testing';

import { PostagemService } from './postagens.service';

describe('PostService', () => {
  let service: PostagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
