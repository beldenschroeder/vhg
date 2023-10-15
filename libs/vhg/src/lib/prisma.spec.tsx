import { render } from '@testing-library/react';

import Prisma from './prisma';

describe('Prisma', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Prisma />);
    expect(baseElement).toBeTruthy();
  });
});
