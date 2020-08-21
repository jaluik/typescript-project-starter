import React from 'react';
import './index.less';

interface IProps {
  name: string;
}

export default (props: IProps) => {
  const { name } = props;
  return <div className="header">{name}</div>;
};
