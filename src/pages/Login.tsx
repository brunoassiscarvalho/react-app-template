import { Button, FormBoard, InputTextLabel, LandscapeBoard } from '@mern-monorepo/ui-react-template';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <LandscapeBoard>
      <FormBoard title="Login">
        <InputTextLabel label="Usuário" />
        <InputTextLabel label="Senha" />
        <Button label="Entrar" onClick={() => navigate('/home')} />
      </FormBoard>
    </LandscapeBoard>
  );
}
