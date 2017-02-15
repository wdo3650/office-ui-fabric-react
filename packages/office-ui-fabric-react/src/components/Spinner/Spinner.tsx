import * as React from 'react';
import { css } from '../../Utilities';
import { ISpinnerProps, SpinnerType } from './Spinner.Props';
import './Spinner.scss';

export class Spinner extends React.Component<ISpinnerProps, any> {
  public static defaultProps: ISpinnerProps = {
    type: SpinnerType.normal
  };

  public render() {
    let { type, label, className } = this.props;

    return (
      <div className={ css('ms-Spinner', className) }>
        <div className={ css('ms-Spinner-circle',
          { 'ms-Spinner--xSmall': type === SpinnerType.xSmall },
          { 'ms-Spinner--small': type === SpinnerType.small },
          { 'ms-Spinner--medium': type === SpinnerType.medium },
          { 'ms-Spinner--large': type === SpinnerType.large })
        }>
        </div>
        { label && (
          <div className='ms-Spinner-label'>{ label }</div>
        ) }
      </div>
    );
  }
}