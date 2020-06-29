import { SetMetadata } from '@nestjs/common';

// A função desse decorator irá receber como parâmetro um perfil de usuário armazenar ele nos metadados.
export const Role = (role: string) => SetMetadata('role', role);
