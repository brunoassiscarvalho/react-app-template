import { Button, enqueueSnackbar } from '@mern-monorepo/ui-react-template';
import { useNavigate } from 'react-router-dom';
import {Error , ArrowCircleUpRounded, ThumbUp} from '@mui/icons-material';
import {Stack} from '@mui/material'

import TransactionService from './TransactionServer';
import Content from '../../Content';

interface PropsTransaction {
  service?: TransactionService;
}

export default function Transaction({ service = new TransactionService() }: PropsTransaction) {
  const navigate = useNavigate();

  const onRequestErrors = () => {
    service
      .getErro()
      .then((res) => console.log(res))
      .catch((err) => {
        console.error(err);
        enqueueSnackbar(err.message, { variant: 'error' });
      });
  };

  const onRequestSucesso = () => {
    service
      .getInfo()
      .then((res) => {
        console.log(res);
        enqueueSnackbar('Consulta realizada com sucesso', { variant: 'success' });
      })
      .catch((err) => {
        console.error(err);
        enqueueSnackbar(err.message, { variant: 'error' });
      });
  };

  const onRequestSucessoNavega = () => {
    service
      .getInfo()
      .then((res) => {
        console.log(res);
        enqueueSnackbar('Consulta realizada com sucesso', { variant: 'success' });
        navigate('sucesso');
      })
      .catch((err) => {
        console.error(err);
        enqueueSnackbar(err.message, { variant: 'error' });
      });
  };

  return (
    <Content title="Transação" isGoback={false}>
     <Stack direction="row" spacing={3} alignItems="center">
        <Button onClick={() => onRequestSucesso()} startIcon={<ThumbUp />}>
          Requisição com sucesso
        </Button>
        <Button onClick={() => onRequestSucessoNavega()} startIcon={<ArrowCircleUpRounded />}>
          Requisição com sucesso e navegação
        </Button>
        <Button color="error" onClick={() => onRequestErrors()} startIcon={<Error />}>
          Requisição com erro
        </Button>
      </Stack>
    </Content>
  );
}
