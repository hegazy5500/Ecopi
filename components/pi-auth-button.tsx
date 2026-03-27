"use client";

import { useEffect, useState } from 'react';
import { getPiSdkConfig } from '@/lib/pi';

export function PiAuthButton() {
  const [status, setStatus] = useState('Connect with Pi');

  useEffect(() => {
    const { sdkUrl } = getPiSdkConfig();
    if (document.querySelector(`script[src="${sdkUrl}"]`)) return;
    const script = document.createElement('script');
    script.src = sdkUrl;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  async function connect() {
    try {
      setStatus('Connecting...');
      const { sandbox } = getPiSdkConfig();
      window.Pi?.init({ version: '2.0', sandbox });
      const auth = await window.Pi?.authenticate(['username', 'payments']);
      const result = await fetch('/api/pi/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accessToken: auth?.accessToken })
      }).then((r) => r.json());
      setStatus(result?.username ? `Connected: ${result.username}` : 'Connected');
    } catch {
      setStatus('Pi auth failed');
    }
  }

  return (
    <button onClick={connect} className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
      {status}
    </button>
  );
}
