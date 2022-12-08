// this will be our test file
import React from 'react';
import { render, screen } from '@testing-library/react';
import QA from '../../client/src/components/QA/QA.jsx';

// afterEach(cleanup);

describe('App', () => {
  it('renders successfully', () => {
    render(<QA />);
    const testElement = screen.queryByText('Questions & Answers');
    expect(testElement).toBeInTheDocument();
  });
});
