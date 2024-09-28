'use client';
 
import { Pagination } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
 
export default function PaginationNext({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const currentPage = Number(searchParams.get('page')) || 1;
 
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Pagination count={totalPages} onChange={(event, page) => createPageURL(page)} />
  )
}