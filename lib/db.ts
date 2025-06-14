import { neon } from '@neondatabase/serverless';
import { neonConfig } from '@neondatabase/serverless';

neonConfig.fetchConnectionCache = true;

const rawSql = neon(process.env.DATABASE_URL!);

export async function query<T = unknown>(
  strings: TemplateStringsArray,
  ...params: unknown[]
): Promise<T[]> {
  const result = await rawSql(strings, ...params);
  return result as T[];
}
