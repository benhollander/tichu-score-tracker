'use strict';

describe('CodeApp', () => {
  let React = require('react/addons');
  let CodeApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    CodeApp = require('components/CodeApp.js');
    component = React.createElement(CodeApp);
  });

  it('should create a new instance of CodeApp', () => {
    expect(component).toBeDefined();
  });
});
