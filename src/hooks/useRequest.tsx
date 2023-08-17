interface PropsRequest {
  method: RequestInit['method'];
  url: string;
}

import { useEffect, useState } from 'react';

export default function useRequest(props: PropsRequest) {
  const [params, setParams] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
          setData(response);
        } catch (err: any) {
          console.log({ err });
          setError(err);
        } finally {
          setLoading(false);
        }
      })();
  }, [params]);

  return { setParams, data, error, loading };
}
