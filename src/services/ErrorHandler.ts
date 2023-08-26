import HttpException from "./HttpException";

export default function errorHandler(error:any){

  console.log({error})
  if (!error?.response?.data)
        throw new HttpException('Erro ao autorizar!', 'FH-AUTH-0002', error);

      const { message, internalCode, info }: HttpException =
        error.response.data;

      if (error.response?.status === 401) {
        localStorage.clear();
        console.log({ location: window.location.pathname });
        if (
          window.location.pathname !== '/' &&
          window.location.pathname !== '/login'
        )
          window.location.assign(window.location.origin);

        throw new HttpException(
          message || 'Não autorizado!',
          internalCode,
          info,
        );
      } else if (error.response?.status === 404) {
        throw new Error('Serviço não localizado');
      } else {
        if (error.message)
          throw new HttpException(error.message, 'FH-AUTH-0001', error);

        throw new HttpException(
          error?.response?.data?.message ||
            'Não foi possivel prosseguir com a solicitação',
          internalCode,
          info,
        );
      }
}