import { AlphaCasePipe } from './alpha-case.pipe';
describe('AlphaCasePipe', () => {
  let pipe:any;
  beforeEach(() => {
      pipe = new AlphaCasePipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('Transform to UpperCase',()=>{
    let testInput = 'mY iNfY';
    expect(pipe.transform(testInput,'U')).toMatch('MY INFY');
  });
  it('Transform to LowerCase',()=>{
    let testInput = 'mY iNfY';
    expect(pipe.transform(testInput,'L')).toMatch('my infy');
  });
  it('Transform to TitleCase',()=>{
    let testInput = 'mY iNfY';
    expect(pipe.transform(testInput,'T')).toMatch('My Infy');
  })
});