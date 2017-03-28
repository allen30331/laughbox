import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
const should = chai.should();
import App from '../src/components/App';


describe('App', function() {
   it('Renders without breaking', function() {
     const renderer = TestUtils.createRenderer();
     renderer.render(<App />);
     const result = renderer.getRenderOutput();

     result.type.should.equal('div');
     result.props.className.should.equal('app-container');
  });
 });



