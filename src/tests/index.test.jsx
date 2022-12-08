// this will be our test file
import React from 'react';
import { render, screen } from '@testing-library/react';
import QA from '../../client/src/components/QA/QA.jsx';
import Overview from '../../client/src/components/productdetails/Overview.jsx';
import { allStyles, currentProduct, allReviews, currentStyle, numReviews } from '../../client/src/testData/testData.js';

// afterEach(cleanup);

describe('App', () => {
  it('renders successfully', () => {
    render(<QA />);
    const testElement = screen.queryByText('Questions & Answers');
    expect(testElement).toBeInTheDocument();
  });
});

describe('App', () => {
  it('Overview renders successfully', () => {
    render(<Overview
      currentProduct={currentProduct}
      allReviews={allReviews}
      numReviews={numReviews}
      allStyles={allStyles}
      currentStyle={currentStyle}
    />);
    const testElement = screen.queryByText('Sunny Side Up');
    expect(testElement).toBeInTheDocument();
  });
});
