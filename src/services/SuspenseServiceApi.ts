interface PropsRequest {
  method: RequestInit['method'];
  url: string;
  params?: any;
}

export function fetchData(props: PropsRequest) {
  let userPromise = sendRequest(props);
  let info = getServerInfo();
  let posts = fetchPosts();
  return { resp: wrapPromise(userPromise), info: wrapPromise(info), posts: wrapPromise(posts) };
}

async function sendRequest(props: PropsRequest) {
  const url = props.method == 'GET' && props.params ? `${props.url}?${new URLSearchParams(props.params)}` : props.url;

  console.log(url);
  return fetch(url, {
    method: props.method,
    body: props.params && JSON.stringify(props.params),
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  }).then((res) => res.json());
}

// Suspense integrations like Relay implement
// a contract like this to integrate with React.
// Real implementations can be significantly more complex.
// Don't copy-paste this into your project!
function wrapPromise(promise: Promise<any>) {
  let status = 'pending';
  let response: any;

  const suspender = promise.then(
    (res) => {
      status = 'success';
      response = res;
    },
    (err) => {
      status = 'error';
      response = err;
    }
  );

  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender;
      case 'error':
        throw response;
      default:
        return response;
    }
  };
  return { read };
}

// function fetchUser() {
//   console.log('fetch user...');
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('fetched user');
//       resolve({
//         name: 'Ringo Starr',
//       });
//     }, 1000);
//   });
// }

function fetchPosts() {
  console.log('fetch posts...');
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log('fetched posts');
      // resolve([
      //   {
      //     id: 0,
      //     text: 'I get by with a little help from my friends',
      //   },
      //   {
      //     id: 1,
      //     text: "I'd like to be under the sea in an octupus's garden",
      //   },
      //   {
      //     id: 2,
      //     text: 'You got that sand all over your feet',
      //   },
      // ]);


      reject("jlkjdsfjdsljfk")

    }, 3000);
  });
}

function getServerInfo() {
  console.log('fetch info...');
  return fetch('http://localhost:3010/info').then((res) => res.json());
}

// interface PropsRequest {
//   method: RequestInit['method'];
//   url: string;
//   params: any;
// }
