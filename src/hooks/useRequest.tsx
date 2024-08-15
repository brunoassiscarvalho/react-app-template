import { enqueueSnackbar } from '@mern-monorepo/ui-react-template';
import { NavigateFunction, To, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface PropsTransaction<T> {
  promise: Promise<T>;
  success?: {
    message?: string;
    callback?: (response:any) => void;
    navigate?: any;
  };
  error?: {
    message?: string;
    callback?: (error:any) => void;
    navigate?: any;
  };
}

export default function useTransaction() {
  const navigate = useNavigate();
  const [request, setRequest] = useState<PropsTransaction<any>>();
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (request) onRequest(request);
  }, [request]);

  const onRequest = ({ promise, success }: PropsTransaction<any>) => {
    setLoading(true);
    promise
      .then((res) => {
        console.log(res);
        setResponse(res);
        if (success?.message)
          enqueueSnackbar(success.message || 'Transação realizada com sucesso', { variant: 'success' });
        if (success?.navigate) navigate(success.navigate);
        if(success?.callback) success?.callback(res);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
        enqueueSnackbar(err.message, { variant: 'error' });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { sendRequest: setRequest, loading, response, error };
}
