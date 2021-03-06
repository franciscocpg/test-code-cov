const funcPkg2File1 = require('./file1').module;

describe('File1 tests', () => {
  describe('#funcPkg1File1', () => {
    describe('when a equals 0', () => {
      it('should return 0', () => {
        const ret = funcPkg2File1(0);
        expect(ret).toBe(0);
      });
    });

    describe('when a equals 1', () => {
      it('should return 1', () => {
        const ret = funcPkg2File1(1);
        expect(ret).toBe(1);
      });
    });

    describe('when a greater than 1', () => {
      it('should return 2', () => {
        const ret = funcPkg2File1(2);
        expect(ret).toBe(2);
      });
    });
  });
});
