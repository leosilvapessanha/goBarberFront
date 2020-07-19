import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {

  const InputRef = useRef<HTMLInputElement>(null);
  // eslint-disable-next-line
  const { error, defaultValue, fieldName, registerField } = useField(name)

  const [isFocused, setIsFocused] = useState(false);
  const [isField, setIsField] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsField(!!InputRef.current?.value);

  }, [])


  useEffect(() => {
    registerField({
      name: fieldName,
      ref: InputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField]);

  return (<Container isFilled={isField} isFocused={isFocused}>
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
