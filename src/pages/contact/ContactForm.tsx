
import {
  Button,
  Form,
  InputSelect,
  InputText,
  SmartFormArray,
  Box
} from '@mern-monorepo/ui-react-template';

import { Const } from '@mern-monorepo/monorepo-interface';




export default function ContactForm() {
  const onSubmit: any = (data: any) => {
    console.log(data);
  };

  return (
    <Box maxWidth={700}>
      <Form onSubmit={onSubmit}>
        <InputText name="name" label="Nome" />
        <InputText name="birthDate" label="Data de nascimento" />
        <InputText name="birthCountry" label="País de nascimento" />

        <SmartFormArray arrayName="address" label="Endereços">
          <InputText name="zipCode" label="Cep" />
          <InputText name="street" label="Rua" />
          <InputText name="district" label="Bairro" />
          <InputText name="city" label="Cidade" />
          <InputText name="number" label="Numero" />
          <InputText name="complement" label="Complemento" />
        </SmartFormArray>
        {/* <SmartFormGroup groupName="Addres">
          <InputText name="itemGrupo1" label="item Grupo 1" />
          <InputText name="itemGrupo2" label="item Grupo 2" />
        </SmartFormGroup> */}
        <InputSelect
          name="gender"
          options={["aaa", "bbbb"]}
          label="metodo"
        />        
        <Button type="submit" >Teste</Button>
      </Form>
    </Box>
  );
}

