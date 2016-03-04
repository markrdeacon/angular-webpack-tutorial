//ngModule will be injected in

export default ngModule => {
  describe('mrd-hello', () => {
      beforeEach(window.module(ngModule.name));     //have to use window.module to pick up angular-mocks module and not common.js module
      
      it('should test properly', () => {
          expect(true).to.be.true;
      });
      
      it('should fail the test', () => {
          expect(false).to.be.true;
      })
  });  
};