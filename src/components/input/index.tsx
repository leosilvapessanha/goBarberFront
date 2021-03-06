import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {

  // eslint-disable-next-line
  const { error, defaultValue, fieldName, registerField } = useField(name);

  const InputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!InputRef.current?.value);

  }, []);


  useEffect(() => {
    registerField({
      name: fieldName,
      ref: InputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField]);

  return (<Container isFilled={isFilled} isFocused={isFocused}>
    {Icon && <Icon size={20} />}
    <input
      onFocus={() => setIsFocused(true)}
      onBlur={handleInputBlur}
      defaultValue={defaultValue}
      ref={InputRef}
      {...rest}
    />
  </Container>
  )
}
export default Input
