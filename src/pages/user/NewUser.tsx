import Content from '../../components/organisms/Content';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Button, Input } from '@mui/material';



type Inputs = {
  example: string;
  exampleRequired: string;
};

interface IFormInput {
  firstName: string;
  lastName: string;
  iceCreamType: {label: string; value: string };
}

export default function NewUser() {
  const { control, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
  };

  

  return (
    <Content title="Home">
    
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => <Input {...field}/>}
        />     
        <Button type="submit" >Confirmar</Button>
      </form>
    </Content>
  );
}
