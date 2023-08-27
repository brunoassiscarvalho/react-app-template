import { Button, LinearIndeterminate, enqueueSnackbar } from '@mern-monorepo/ui-react-template';
import { useNavigate } from 'react-router-dom';
import { Error, ArrowCircleUpRounded, ThumbUp } from '@mui/icons-material';
import { Stack } from '@mui/material';

import TransactionService from './TransactionServer';
import Content from '../../Content';
import { useState } from 'react';

interface PropsTransaction {
  service?: TransactionService;
}

export default function Transaction({ service = new TransactionService() }: PropsTransaction) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);

  const onRequestErrors = () => {
    setLoading(true);
    service
      .getErro()
      .then((res) => console.log(res))
      .catch((err) => {
        console.error(err);
        enqueueSnackbar(err.message, { variant: 'error' });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onRequestSucesso = () => {
    setLoading(true);
    setTimeout(() => {
      service
        .getInfo()
        .then((res) => {
          console.log(res);
          enqueueSnackbar('Consulta realizada com sucesso', { variant: 'success' });
        })
        .catch((err) => {
          console.error(err);
          enqueueSnackbar(err.message, { variant: 'error' });
        })
        .finally(() => {
          setLoading(false);
        });
    }, 5000);
  };

  const onRequestSucessoNavega = () => {
    setLoading(true);
    setTimeout(() => {
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
        })
        .finally(() => {
          setLoading(false);
        });
    }, 5000);
  };

  return (
    <Content title="Transação" isGoback={false}>
      <Stack spacing={3}>
        <Stack direction="row" spacing={3} alignItems="center">
          <Button onClick={() => onRequestSucesso()} startIcon={<ThumbUp />} disabled={loading}>
            Requisição com sucesso
          </Button>
          <Button onClick={() => onRequestSucessoNavega()} startIcon={<ArrowCircleUpRounded />} disabled={loading}>
            Requisição com sucesso e navegação
          </Button>
          <Button color="error" onClick={() => onRequestErrors()} startIcon={<Error />} disabled={loading}>
            Requisição com erro
          </Button>
        </Stack>
        {loading && <LinearIndeterminate />}
      </Stack>
    </Content>
  );
}
