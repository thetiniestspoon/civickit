import { demoRepresentatives } from '@/data/civiclens/demo-representatives';
import RepDetailClient from './rep-detail';

export function generateStaticParams() {
  return demoRepresentatives.map((rep) => ({ id: rep.id }));
}

export default async function RepresentativeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <RepDetailClient id={id} />;
}
