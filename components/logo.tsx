import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Logo({ classnames }: { classnames: string }) {
  return (
    <Link href="/" className={cn('text-3xl font-semibold ', classnames)}>
      milkhunters
    </Link>
  );
}
