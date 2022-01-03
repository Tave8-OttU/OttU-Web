import * as React from 'react';
interface props {
  ott: string;
  width?: string;
}
const OttImg: React.FC<props> = ({ ott, width }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClickJoinHandler = () => {
    setIsOpen(true);
  };
  return (
    <img
      src={require('../../assets/images/' + ott + '.png').default}
      width={width}
    />
  );
};
export default OttImg;
