import React, { useMemo } from 'react';
import FastImage, { FastImageProps } from 'react-native-fast-image';

type IProps = {
  previewUrl: string;
} & Partial<FastImageProps>;
export const IMAGE_SIZE = 150;

const CachedImage = ({ previewUrl, ...other }: IProps): JSX.Element | null => {
  const urlConfig = useMemo(
    () => ({ uri: previewUrl, cache: FastImage.cacheControl.immutable }),
    [previewUrl],
  );
  if (!previewUrl) return null;
  return <FastImage {...other} source={urlConfig} />;
};

export default React.memo(CachedImage);
