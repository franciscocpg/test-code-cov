function funcPkg2File1(a) {
    if (a === 0) {
      return 0;
    }
  
    if (a === 1) {
      return 1;
    }
  
    if (a > 1) {
      return 2;
    }
  }
  
  exports.module = funcPkg2File1;
  