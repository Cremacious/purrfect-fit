'use client';
import { useSession, signOut } from '@/lib/auth-client';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { UserRound } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function AuthButtons() {
  const { data: session } = useSession();
  const isAdmin = session?.user.email === 'admin@gmail.com';

  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  if (!session) {
    return (
      <div>
        <Button asChild variant={'secondary'} className="font-bold">
          <Link href="/sign-in">Sign In</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center justify-center mt-2">
            <UserRound className="text-white w-7 h-7 cursor-pointer" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>

          {isAdmin && (
            <DropdownMenuItem onClick={() => router.push('/admin')}>
              Admin Panel
            </DropdownMenuItem>
          )}
          <DropdownMenuItem>Team </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleSignOut}>Sign Out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
