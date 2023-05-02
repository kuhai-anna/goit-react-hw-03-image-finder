import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  const loaderParams = {
    color: '#c2014ef4',
    // color: '#0171c2f4',
    ariaLabel: 'three-dots-loading',
  };

  const loaderWrapperStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    // backgroundColor: '#d9effff4',
  };
  return (
    <ThreeDots
      {...loaderParams}
      wrapperStyle={loaderWrapperStyle}
      visible={true}
    />
  );
};
