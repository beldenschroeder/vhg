import { useRouter } from 'next/navigation';

export const useFetch = () => {
  const router = useRouter();

  const handleResponse = async (response: any) => {
    const isJson = response.headers
      ?.get('content-type')
      ?.includes('application/json');
    const data = isJson ? await response.json() : null;

    // Check for error response
    if (!response.ok) {
      if (response.status === 401) {
        // TODO: Create an error page to redirect to here
        // API auto logs out on 401 Unauthorized, so redirect to login page
        router.push('/');
      }

      // get error message from body or default to response status
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  };

  const request = (method: string) => {
    return (url: string, body?: any) => {
      const requestOptions: any = {
        method
      };
      if (body) {
        requestOptions.headers = { 'Content-Type': 'application/json' };
        requestOptions.body = JSON.stringify(body);
      }
      return fetch(url, requestOptions).then(handleResponse);
    };
  };

  return {
    get: request('GET')
  };
};
