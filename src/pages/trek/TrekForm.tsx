import { Button, Form, InputSelect, InputText, InputTextLabel } from '@mern-monorepo/ui-react-template';
import { ArrowBack, AddToQueue, Add } from '@mui/icons-material';
import { Box, Divider, IconButton, Input, InputBase, Stack, Typography, Button as MUIButton, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FieldArray from './FieldArray';

interface IFormInput {
  method: string;
  api: string;
  resource: string;
  value: string;
  mySelectField: string;
  test: any;
}

export default function TrekForm() {
  const { control, register, getValues, reset, setValue, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      method: '',
      api: '',
      resource: '',
      value: '',
      mySelectField: '',
      test: [
        {
          name: 'useFieldArray1',
        },
        {
          name: 'useFieldArray2',
        },
      ],
    },
  });

  const onSubmit: SubmitHandler<any> = (data: any) => {
    console.log(data);
  };

  return (
    <Box width="100%">
      <Stack spacing={3}>
        <ArrowBack />
        <Stack direction="row" spacing={3} alignItems="center">
          <AddToQueue fontSize="large" />
          <Typography variant="h4">Nova Jornada</Typography>
        </Stack>
        <Box maxWidth={700}>
          {/* <InputSelect name='teste'/> */}
          <Form onSubmit={onSubmit}>
            <InputTextLabel name="lastName" label="teste" />
            {/* <InputText name="firstName" />
            <InputText name="lastName" /> */}
            <InputSelect name="gender" options={['female', 'male', 'other']} />
            <Button type="submit" label={'teste'} />
          </Form>

          {/* <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
              <FieldArray {...{ control, register, getValues, setValue }} />
              <FormControl>
                <InputLabel id="method">Metodo</InputLabel>
                <Controller
                  name="method"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field}>
                      <MenuItem value="get">GET</MenuItem>
                      <MenuItem value="post">POST</MenuItem>
                      <MenuItem value="put">PUT</MenuItem>
                      <MenuItem value="patch">PATCH</MenuItem>
                      <MenuItem value="delete">DELETE</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
              <FormControl>
                <InputLabel id="api">API</InputLabel>
                <Controller
                  name="api"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field}>
                      <MenuItem value="get">www.swapi.com</MenuItem>
                      <MenuItem value="post">www.teste.com</MenuItem>
                      <MenuItem value="put">www.minhaapi.com</MenuItem>
                      <MenuItem value="patch">www.olaapi.com</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
              <Controller name="resource" control={control} render={({ field }: any) => <TextField label="end-point" {...field} />} />
              <Controller name="value" control={control} render={({ field }: any) => <TextField label="valor" {...field} />} />

              <Button type="submit" label={'Salvar Jornada'}></Button>
            </Stack>
          </form> */}
        </Box>
      </Stack>
    </Box>
  );
}
