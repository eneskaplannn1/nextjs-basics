import { useRouter } from "next/router";

function Project() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query.projectId);
  return (
    <>
      <h1>product</h1>
    </>
  );
}
export default Project;
