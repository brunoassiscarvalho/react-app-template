import { Button, Form, FormBoard, InputText, LandscapeBoard } from '@mern-monorepo/ui-react-template';
import { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<any> = (data: any) => {
    console.log(data);
  };

  return (
    <LandscapeBoard>
      <FormBoard title="Login">
        <Form onSubmit={onSubmit}>
          <InputText label="Usuário" />
          <InputText label="Senha" />
          <Button onClick={() => navigate('/home')} >Entrar</Button>
        </Form>
      </FormBoard>
    </LandscapeBoard>
  );
}
