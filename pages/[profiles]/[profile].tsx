import { useRouter } from 'next/router';

export default function Profile() {
  const router = useRouter();
  console.log(router);
  const { profile } = router.query;
  return (
    <>
      <div className="text-app-blue">este es el usuario {profile}</div>
    </>
  );
}
