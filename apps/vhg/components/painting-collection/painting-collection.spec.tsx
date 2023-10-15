import { render } from '@testing-library/react';

import PaintingCollection from './painting-collection';

describe('PaintingCollection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PaintingCollection />);
    expect(baseElement).toBeTruthy();
  });
});
