import { ContentInner } from '@mern-monorepo/ui-react-template';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

interface PropsContent {
  title: string;
  children: ReactElement;
  isGoback?: boolean;
  goBack?: () => void | boolean;
}

export default function Content({ title, children, goBack, isGoback }: PropsContent) {
  const navigate = useNavigate();

  const handleGoBack = !!goBack ? () => goBack() : () => navigate(-1)
  return (
    <ContentInner title={title} isGoback={isGoback} goBack={handleGoBack}>
      {children}
    </ContentInner>
  );
}
