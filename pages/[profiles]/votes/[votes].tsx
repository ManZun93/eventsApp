import { useRouter } from 'next/router';
export default function Votes() {
  const router = useRouter();
  console.log(router);
  const { votes } = router.query;
  return (
    <>
      <div className="text-app-blue">estos son tus {votes}</div>
    </>
  );
}
