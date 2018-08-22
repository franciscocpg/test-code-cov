const funcPkg1File1 = require('./file1').module;

describe('File1 tests', () => {
  describe('#funcPkg1File1', () => {
    describe('when a equals 0', () => {
      it('should return 0', () => {
        const ret = funcPkg1File1(0);
        expect(ret).toBe(0);
      });
    });
  });
});
