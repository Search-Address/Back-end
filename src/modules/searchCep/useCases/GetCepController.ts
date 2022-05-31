import { AppError } from '@shared/errors/AppError';
import { Request, Response } from 'express';
import GetCepUseCase from './GetCepUseCase';

export default class GetCepController {
  async handle(request: Request, response: Response): Promise<Response> {
    /*
     #swagger.tags = ['Address']
     #swagger.description = 'Endpoint para obter um endereço via CEP.'
     #swagger.parameters['cep'] = {
        description: 'Cep usado para buscar o endereço.',
        example: '21655530'
      }
    */

    const { cep } = request.query;

    const regexJustNumber = /\D/g;

    // Força a variável cep a ser uma string e depois faz um replace para
    // retirar tudo que não for número
    const cepFormated = (cep as string).replace(regexJustNumber, '');

    // verifica se o Cep informado é válido ou inválido
    if (cepFormated.length !== 8) {
      throw new AppError('CEP informado é inválido');
    }

    const completAddress = await GetCepUseCase.execute({ cepFormated });

    return response.json(completAddress);
  }
}
