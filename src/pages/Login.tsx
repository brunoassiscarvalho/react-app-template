import { useNavigate } from 'react-router-dom';
import { Button, Form, FormBoard, InputText, LandscapeBoard, SubmitHandler } from '@mern-monorepo/ui-react-template';

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
          <Button onClick={() => navigate('/home')}>Entrar</Button>
        </Form>
      </FormBoard>
    </LandscapeBoard>
  );
}
