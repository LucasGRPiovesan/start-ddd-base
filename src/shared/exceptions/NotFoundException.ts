import { AppException } from './AppException';

export class NotFoundException extends AppException {
  constructor(message = 'Resource not found') {
    super(message, 404, 'NotFoundException');
  }
}
