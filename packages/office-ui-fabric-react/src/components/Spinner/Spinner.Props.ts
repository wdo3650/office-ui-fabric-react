import * as React from 'react';
import { Spinner } from './Spinner';

export interface ISpinnerProps extends React.Props<Spinner> {
  /**
  * The type of the button to render. { normal, large }
  * @default SpinnerType.normal
  */
  type?: SpinnerType;

  /**
  * The label to show next to the spinner.
  */
  label?: string;

  /**
   * Additional CSS class(es) to apply to the Spinner.
   */
  className?: string;
}

export enum SpinnerType {
  xSmall = 0,
  small = 1,
  normal = 2,
  medium = 2,
  large = 3
}
