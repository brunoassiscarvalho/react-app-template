import { Component, Suspense, useEffect, useState } from 'react';
import { fetchData } from '../../services/SuspenseServiceApi';
import ErrorBoundary from '../../ErroBoudary';

export default function Profile() {
  const resource = fetchData({ url: 'http://localhost:3010/info/erro', method: 'GET' });

  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      {/* <ProfileTimeline resource={resource} /> */}
      <ProfileDetails resource={resource} />
      {/* <Suspense fallback={<h1>Loading posts...</h1>}>
        <Button label="teste" />
        <Suspense fallback={<h1>Loading info...</h1>}>
          <ServerInfo />
        </Suspense>
      </Suspense> */}
    </Suspense>
  );
}

function ProfileDetails({ resource }: any) {
  // Try to read user info, although it might not have loaded yet
  const info = resource.info.read();

    return <h1>{info}</h1>;
}

function ProfileTimeline({ resource }: any) {
  // Try to read posts, although they might not have loaded yet
  const posts = resource.posts.read();

  return (
    <ul>
      {posts.map((post: { id: string; text: string }) => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
}

// function ErrorBoundary(props:any) {
//   const [error, setError] = useState<any>(null);

//   useEffect(() => {
//     // Catch errors thrown by child components
//     const handleErrors = (err:any) => {
//       setError(err);
//     };
//     window.addEventListener('error', handleErrors);
//     return () => {
//       window.removeEventListener('error', handleErrors);
//     };
//   }, []);

//   if (error) {
//     return <h1>Something went wrong: {error?.message || "Não foi possível realizar a ação"}</h1>;
//   }

//   return props.children;
// }
