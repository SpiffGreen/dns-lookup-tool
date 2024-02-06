import dnsPack, { promises as dns } from "node:dns";

async function resolveWithFallback(promise: Promise<any>): Promise<any> {
  try {
    return await promise;
  } catch (error: any) {
    if(error.code === dnsPack.NODATA) return null;
    console.error("Error resolving DNS:", error);
    return null;
  }
}

export async function getHostData(hostname: string) {
  const nsPromise = dns.resolveNs(hostname);
  const ipPromise = dns.resolve(hostname);
  const txtPromise = dns.resolveTxt(hostname);
  const cnamePromise = dns.resolveCname(hostname);
  const mxPromise = dns.resolveMx(hostname);

  const [ns, ip, txt, cname, mx] = await Promise.all([
    resolveWithFallback(nsPromise),
    resolveWithFallback(ipPromise),
    resolveWithFallback(txtPromise),
    resolveWithFallback(cnamePromise),
    resolveWithFallback(mxPromise),
  ]);

  return { ns, ip, txt, cname, mx };
}