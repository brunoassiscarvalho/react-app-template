interface PropsRequest {
  method: RequestInit['method'];
  url: string;
}

import { enqueueSnackbar } from '@mern-monorepo/ui-react-template';
import { useEffect, useState } from 'react';
import errorHandler from '../services/ErrorHandler';

export default function useRequest(props: PropsRequest) {
  const [params, setParams] = useState<any>(null);
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log({ useEffect: error });
    if (!!error) enqueueSnackbar(error.message, { variant: 'error' });
  }, [error]);

  useEffect(() => {
    console.log({ params });
    if (params)
      (async function () {
        try {
          setLoading(true);
          const response: any = await fetch(props.url, {
            method: props.method,
            body: JSON.stringify(params),
            headers: new Headers({
              'Content-Type': 'application/json',
              Accept: 'application/json',
            }),
          });
          console.log({ response });
          setResponse(response);
        } catch (err: any) {

          console.log({err})
          setError(errorHandler(err));
        } finally {
          setLoading(false);
        }
      })();
  }, [params]);

  return { sendRequest: setParams, response, error, loading };
}
