import { RenderOptions } from '@testing-library/react';

export type CustomRenderProps = {} & Omit<RenderOptions, 'queries'>;
