export type PiAuthResult = {
  accessToken: string;
  user: {
    uid: string;
    username: string;
  };
};

declare global {
  interface Window {
    Pi?: {
      init: (options: { version: string; sandbox?: boolean }) => void;
      authenticate: (
        scopes: string[],
        onIncompletePaymentFound?: (payment: unknown) => void
      ) => Promise<{ accessToken: string; user: { uid: string; username: string } }>;
      createPayment?: (...args: unknown[]) => unknown;
    };
  }
}

export function getPiSdkConfig() {
  return {
    sdkUrl: process.env.NEXT_PUBLIC_PI_SDK_URL || 'https://sdk.minepi.com/pi-sdk.js',
    sandbox: process.env.NEXT_PUBLIC_PI_SANDBOX === 'true'
  };
}

export async function verifyPiAccessToken(accessToken: string) {
  if (!accessToken) {
    throw new Error('Missing Pi access token');
  }
  return { ok: true, uid: 'pi-demo-user', username: 'ecohero' };
}

export async function createPiRewardPayment(amount: number, memo: string) {
  return {
    status: 'scaffolded',
    amount,
    memo,
    note: 'Wire this route to your Pi backend approval/completion flow.'
  };
}
