import { AppError } from '@shared/errors/AppError';
import axios from 'axios';
import { IGetCepDTO } from '../dtos/IGetCepDTO';

interface IRequest {
  cepFormated: string;
}

class GetCepUseCase {
  async execute({ cepFormated }: IRequest): Promise<IGetCepDTO> {
    const completAddress = await axios
      .get(`https://ws.apicep.com/cep.json?code=${cepFormated}`)
      .then(response => response.data);

    if (completAddress.message === 'Blocked by flood') {
      throw new AppError(
        'Você realizou muitas buscas em pouco tempo! Aguarde um momento, por favor.',
      );
    }

    if (completAddress.message === 'CEP não encontrado') {
      throw new AppError('CEP não encontrado', 404);
    }

    return completAddress;
  }
}

export default new GetCepUseCase();
