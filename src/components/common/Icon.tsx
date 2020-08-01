import React from 'react';
import PropTypes from 'prop-types';

interface IconProps {
  icon: string;
  prefix?: string;
  className?: string;
  size?: string;
}

export const ExclamationIcon = () => <Icon icon="exclamation-triangle" className="has-text-danger" />;
export const CheckIcon = () => <Icon icon="check" className="has-text-success" />;

const Icon: React.FunctionComponent<IconProps> = ({ icon, prefix, className, size = 'fa-1x' }: IconProps) => {
  const iconPrefix = prefix || 'fa';
  return (
    <span>
      <i className={`${iconPrefix} fa-${icon} ${className || ''} ${size}`} />
    </span>
  );
};

export default Icon;
