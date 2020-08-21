import React, { FC } from 'react';
import './index.less';

interface IProps {
  name: string;
}

const Component: FC<IProps> = (props) => {
  const { name } = props;
  return <div className="header">{name}</div>;
};

export default Component;
