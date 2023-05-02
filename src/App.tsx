import { Button, Dashboard, HeaderNavBar } from '@mern-monorepo/ui-react-template';

import customTheme from './styles/CustomTheme';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, Suspense, useEffect, useState } from 'react';
import { fetchProfileData } from './services/SuspenseServiceApi';

const resource = fetchProfileData();

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Dashboard>
        <Suspense fallback={<h1>Loading profile...</h1>}>
          <ProfileDetails />
          <Suspense fallback={<h1>Loading posts...</h1>}>
            <ProfileTimeline />
            <Button />
            <Suspense fallback={<h1>Loading info...</h1>}>
              <ServerInfo />
            </Suspense>
          </Suspense>
        </Suspense>
      </Dashboard>
      {/* <HeaderNavBar/> */}
    </ThemeProvider>
  );
}

function ServerInfo() {
  // Try to read user info, although it might not have loaded yet
  try {
    const info = resource.info.read();
    console.log('user', info);
    return <h1>{info}</h1>;
  } catch (error) {
    return <h1>Erro no servidor!</h1>;
  }
}

function ProfileDetails() {
  // Try to read user info, although it might not have loaded yet
  const user = resource.user.read();
  return <h1>{user.name}</h1>;
}

function ProfileTimeline() {
  // Try to read posts, although they might not have loaded yet
  const posts = resource.posts.read();
  return (
    <ul>
      {posts.map((post: { id: Key | null | undefined; text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
}

export default App;
