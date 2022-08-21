describe('correct test', () => {
  it('test 1 ', () => {
    const str = '()1))((())()))(()()2()';
    assert.equal(checkBrackets(str), 4);
  });

  it('test 2 ', () => {
    const str = '()1(()))()(()()()))((())()))(()()2()))))))))))))';
    assert.equal(checkBrackets(str), 14);
  });

  it('test 3 ', () => {
    const str = '()1))((())()))(()()2()';
    assert.equal(checkBrackets(str), 4);
  });

  it('test 4 ', () => {
    const str = '()1(()))()(()()()))((())()))(())))))))';
    assert.equal(checkBrackets(str), 9);
  });

  it('test 5 ', () => {
    const str = '()1))((())()()2()';
    assert.equal(checkBrackets(str), 3);
  });

  it('test 6 ', () => {
    const str = ')()2()))))))))))))';
    assert.equal(checkBrackets(str), 13);
  });

  it('test 7 ', () => {
    const str = '()1))((())())()()2()';
    assert.equal(checkBrackets(str), 2);
  });

  it('test 8 ', () => {
    const str = '()1(()(()()2()))))))))))))';
    assert.equal(checkBrackets(str), 10);
  });

  it('test 9 ', () => {
    const str = '()1))((())()))(()()2()';
    assert.equal(checkBrackets(str), 4);
  });

  it('test 10 ', () => {
    const str = '())))))';
    assert.equal(checkBrackets(str), 5);
  });
});


describe('incorrect test', () => {
  it('test 1 incorect ', () => {
    const str = NaN;
    assert.equal(checkBrackets(str), -1);
  });

  it('test 2 ', () => {
    const str = 8;
    assert.equal(checkBrackets(str), -1);
  });

  it('test 3 ', () => {
    const str = {};
    assert.equal(checkBrackets(str), -1);
  });

  it('test 4 ', () => {
    const str = [];
    assert.equal(checkBrackets(str), -1);
  });

  it('test 5 ', () => {
    const str = 'khkh';
    assert.equal(checkBrackets(str), -1);
  });
});
