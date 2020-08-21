import React from 'react';

interface IProps {
  name: string;
}

export default (props: IProps) => {
  const { name } = props;
  return <div className="header">{name}</div>;
};
