import { ReactElement } from 'react';

import { render } from '@testing-library/react';

import { CustomRenderProps } from '@/utils/tests/types';

function customRender(
  ui: ReactElement,
  { ...renderOptions }: CustomRenderProps = {},
) {
  return render(<>{ui}</>, renderOptions);
}

// eslint-disable-next-line import/export
export * from '@testing-library/react';

// eslint-disable-next-line import/export
export { customRender as render };
