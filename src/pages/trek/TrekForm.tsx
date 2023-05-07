import { Input } from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

interface IFormInput {
  firstName: string;
  lastName: string;
  iceCreamType: { label: string; value: string };
}

export default function TrekForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      iceCreamType: {},
    },
  });

  const onSubmit: SubmitHandler<any> = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller name="firstName" control={control} render={({ field }:any) => <Input {...field} />} />      
      <input type="submit" />
    </form>
  );
}
