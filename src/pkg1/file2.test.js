const funcPkg1File2 = require('./file2').module;

describe('File2 tests', () => {
  describe('#funcPkg1File2', () => {
    describe('when a equals 0', () => {
      it('should return 0', () => {
        const ret = funcPkg1File2(0);
        expect(ret).toBe(0);
      });
    });

    describe('when a equals 1', () => {
      it('should return 1', () => {
        const ret = funcPkg1File2(1);
        expect(ret).toBe(1);
      });
    });
  });
});
