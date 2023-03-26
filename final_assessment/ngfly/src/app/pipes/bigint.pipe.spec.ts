import { BigintPipe } from './bigint.pipe';

describe('BigintPipe', () => {
  it('create an instance', () => {
    const pipe = new BigintPipe();
    expect(pipe).toBeTruthy();
  });
});
