import {
  Box,
  Stack,
  TextLabel
} from '@mern-monorepo/ui-react-template';



export default function ContactDetail() {
  return (
    <Box maxWidth={700}>
      <Stack spacing={2}>        
      <TextLabel label="Nome" text='Fulano De Tal' />
      <TextLabel label="Email" text='fulanotal@gmail.com' />
      </Stack>
    </Box>
  );
}
