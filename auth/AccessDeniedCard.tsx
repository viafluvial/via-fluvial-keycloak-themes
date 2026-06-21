import { ShieldX } from 'lucide-react';
import { Card } from '@/app/components/ui/card';

interface AccessDeniedCardProps {
  title?: string;
  description?: string;
}

export function AccessDeniedCard({
  title = 'Acesso negado',
  description = 'Seu perfil atual nao possui permissao para visualizar este recurso.',
}: AccessDeniedCardProps) {
  return (
    <Card className="p-10 text-center">
      <ShieldX className="w-12 h-12 text-red-500 mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
}
