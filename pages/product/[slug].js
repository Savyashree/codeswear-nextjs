import { useRouter } from 'next/router';

export default function Slug() {
  let router = useRouter();
  let { slug } = router.query;
  return <h1>{slug}</h1>;
}
