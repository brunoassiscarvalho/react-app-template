import Content from '../../components/organisms/Content';
import { Box, Button, Stack } from '@mui/material';
import SmartForm from '../../components/organisms/form/SmartForm';
import InputText from '../../components/molecules/inputs/inputText';
import InputTextSimple from '../../components/molecules/inputs/inputTextSimple';
import { logoUrl } from '../../utils/Constants';

export default function NewUser() {
  const createNewUser = (newUser: any) => {
    console.log({ newUser });
  };

  return (
    <Content title="Cadastro">
      <Stack spacing={5}>
        <Box component="img" src={logoUrl} />
        <SmartForm onSubmit={(data) => console.log(data)}>
          <InputText
            name="email"
            type="email"
            label="Email"
            validations={{
              required: 'obrigatorio!',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            }}
          />
          <InputText
            name="telefone"
            format="tel"
            label="Telefone"
            validations={{ required: 'obrigatorio!' }}
          />
          <InputTextSimple
            name="password"
            type="password"
            label="Senha"
            validations={{ required: 'obrigatorio!' }}
          />
          <InputTextSimple
            name="passwordConfirmation"
            type="password"
            label="Confirme a senha"
            validations={{ required: 'obrigatorio!' }}
          />
          <Button type="submit">Cadastrar</Button>
        </SmartForm>
      </Stack>
    </Content>
  );
}
