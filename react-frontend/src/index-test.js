import React from 'react';
import {render, fireEvent, cleanup} from 'react-testing-library';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('Index page loads correctly', () => {
    const {div} = render(
        <div id="app"></div>
    );
  
    expect(queryByLabelText(/off/i)).toBeTruthy();
    
  });