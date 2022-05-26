import MaskedInput from 'react-text-mask';
import { Input, FormHelperText, FormControl, InputLabel } from '@mui/material';
import { IFormItem } from '../../organisms/form/FormItem';


interface IInputText extends IFormItem {
  name: string,
  label: string,
  format?: any,
  onBlur?: any,
  id?: string,
  style?: any,
  shrink?: boolean
}

const patternsMask: any = {
  tel: ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  cpf: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/],
  cep: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
  num: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
};

export default function InputText({ errors, name, shrink, label, onBlur, format, type, id, defaultValue, validations, inputRef, errorMessage }: IInputText) {

  return (

    <FormControl>
      <InputLabel required={validations?.required} shrink={true} error={!!errorMessage} htmlFor="formatted-text-mask-input">{label}</InputLabel>
      <Input
        fullWidth
        onBlur={onBlur}
        error={!!errorMessage}
        name={name}
        inputRef={inputRef}
        defaultValue={defaultValue}
        type={format || type}
        id={id || name}
        inputComponent={format && TextMaskCustom}
      />
      {!!errorMessage && <FormHelperText error={!!errorMessage}>{errorMessage}</FormHelperText>}
    </FormControl>
  );
}

function TextMaskCustom({ inputRef, type, format, formatChars, onBlur, ...other }: any): any {
  return (

    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      onBlur={onBlur}
      mask={patternsMask[type]}
      formatChars={formatChars}
      placeholderChar={'\u2000'}
    />
  );
}