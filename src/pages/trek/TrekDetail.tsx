import { useParams } from 'react-router-dom';

export default function TrekDetail() {
  let { idDetail } = useParams<string>();
  return <>Detail {idDetail}</>;
}
