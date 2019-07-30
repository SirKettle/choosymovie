import * as React from 'react';
import { LOADING_STATUS } from '../../state/loadingStatus';

export const Loading = ({
  status,
  children,
  loadingMessage = 'Loading',
  errorMessage = 'Oops - something went wrong',
}) => {
  switch (status) {
    case LOADING_STATUS.ERROR:
      return <>{errorMessage}</>;
    case LOADING_STATUS.SUCCESS:
      return children;
    default:
      return <>{loadingMessage}</>;
  }
};
