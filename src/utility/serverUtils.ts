// serverUtils.ts
import { cookies } from 'next/headers';

export const getServerAuth = async () => {
  const cookieStore = cookies();
  return {
    token: (await cookieStore).get('accessToken')?.value || '',
    culture: (await cookieStore).get('culture')?.value || 'en-US',
  };
};