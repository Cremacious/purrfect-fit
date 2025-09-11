'use client';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

export default function ProductReviews() {
  return (
    <div className="py-6 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between">
          <h3 className="text-xl font-bold text-slate-900 !leading-tight mb-3">
            All reviews
          </h3>
          <p className="text-md font-bold text-slate-700 !leading-tight md:pt-2 pt-1">
            Showing 5 of 25 Reviews
          </p>
        </div>
        <div className="divide-y divide-gray-300">
          <div className="py-6">
            <div className="flex items-center gap-4">
              <div className="shrink-0">
                <img
                  src="https://readymadeui.com/team-2.webp"
                  className="object-cover rounded-full w-12 h-12 border-2 border-gray-400"
                  alt="customer-img-1"
                />
              </div>
              <div>
                <p className="text-[15px] text-slate-900 font-semibold">
                  Emily Carter
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-4 h-4 flex items-center justify-center rounded-full bg-green-600/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 h-2 fill-green-700"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9.225 20.656a1.206 1.206 0 0 1-1.71 0L.683 13.823a1.815 1.815 0 0 1 0-2.566l.855-.856a1.815 1.815 0 0 1 2.567 0l4.265 4.266L19.895 3.14a1.815 1.815 0 0 1 2.567 0l.855.856a1.815 1.815 0 0 1 0 2.566z" />
                    </svg>
                  </span>
                  <p className="text-slate-600 text-xs">Verified Buyer</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h6 className="text-slate-900 text-base font-semibold">
                Quick and Easy Experience
              </h6>
              <div className="flex items-center space-x-0.5 text-yellow-400 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                </svg>
                <p className="text-slate-600 text-sm !ml-2">2 days ago</p>
              </div>
              <div className="mt-4">
                <p className="text-slate-600 text-[15px] leading-relaxed">
                  Everything was seamless. Ordering was simple and the response
                  time was super fast. Highly recommend to anyone looking for
                  convenience and speed.
                </p>
              </div>
            </div>
          </div>
          <div className="py-6">
            <div className="flex items-center gap-4">
              <div className="shrink-0">
                <img
                  src="https://readymadeui.com/team-3.webp"
                  className="object-cover rounded-full w-12 h-12 border-2 border-gray-400"
                  alt="customer-img-2"
                />
              </div>
              <div>
                <p className="text-[15px] text-slate-900 font-semibold">
                  Daniel Kim
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-4 h-4 flex items-center justify-center rounded-full bg-green-600/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 h-2 fill-green-700"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9.225 20.656a1.206 1.206 0 0 1-1.71 0L.683 13.823a1.815 1.815 0 0 1 0-2.566l.855-.856a1.815 1.815 0 0 1 2.567 0l4.265 4.266L19.895 3.14a1.815 1.815 0 0 1 2.567 0l.855.856a1.815 1.815 0 0 1 0 2.566z" />
                    </svg>
                  </span>
                  <p className="text-slate-600 text-xs">Verified Buyer</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h6 className="text-slate-900 text-base font-semibold">
                Fantastic Support
              </h6>
              <div className="flex items-center space-x-0.5 text-yellow-400 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                </svg>
                <p className="text-slate-600 text-sm !ml-2">3 days ago</p>
              </div>
              <div className="mt-4">
                <p className="text-slate-600 text-[15px] leading-relaxed">
                  Had a few questions before ordering and the customer service
                  team was amazing—super responsive and knowledgeable. It really
                  made a difference!
                </p>
              </div>
            </div>
          </div>
          <div className="py-6">
            <div className="flex items-center gap-4">
              <div className="shrink-0">
                <img
                  src="https://readymadeui.com/team-4.webp"
                  className="object-cover rounded-full w-12 h-12 border-2 border-gray-400"
                  alt="customer-img-3"
                />
              </div>
              <div>
                <p className="text-[15px] text-slate-900 font-semibold">
                  Priya Singh
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-4 h-4 flex items-center justify-center rounded-full bg-green-600/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 h-2 fill-green-700"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9.225 20.656a1.206 1.206 0 0 1-1.71 0L.683 13.823a1.815 1.815 0 0 1 0-2.566l.855-.856a1.815 1.815 0 0 1 2.567 0l4.265 4.266L19.895 3.14a1.815 1.815 0 0 1 2.567 0l.855.856a1.815 1.815 0 0 1 0 2.566z" />
                    </svg>
                  </span>
                  <p className="text-slate-600 text-xs">Verified Buyer</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h6 className="text-slate-900 text-base font-semibold">
                Exceeded Expectations
              </h6>
              <div className="flex items-center space-x-0.5 text-yellow-400 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                </svg>
                <p className="text-slate-600 text-sm !ml-2">4 days ago</p>
              </div>
              <div className="mt-4">
                <p className="text-slate-600 text-[15px] leading-relaxed">
                  From start to finish, I felt taken care of. The ordering
                  process was smooth and the delivery was right on time. Would
                  definitely use this service again.
                </p>
              </div>
            </div>
          </div>
          <div className="py-6">
            <div className="flex items-center gap-4">
              <div className="shrink-0">
                <img
                  src="https://readymadeui.com/team-5.webp"
                  className="object-cover rounded-full w-12 h-12 border-2 border-gray-400"
                  alt="customer-img-4"
                />
              </div>
              <div>
                <p className="text-[15px] text-slate-900 font-semibold">
                  Liam Brown
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-4 h-4 flex items-center justify-center rounded-full bg-green-600/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 h-2 fill-green-700"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9.225 20.656a1.206 1.206 0 0 1-1.71 0L.683 13.823a1.815 1.815 0 0 1 0-2.566l.855-.856a1.815 1.815 0 0 1 2.567 0l4.265 4.266L19.895 3.14a1.815 1.815 0 0 1 2.567 0l.855.856a1.815 1.815 0 0 1 0 2.566z" />
                    </svg>
                  </span>
                  <p className="text-slate-600 text-xs">Verified Buyer</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h6 className="text-slate-900 text-base font-semibold">
                Highly Recommended
              </h6>
              <div className="flex items-center space-x-0.5 text-yellow-400 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                </svg>
                <p className="text-slate-600 text-sm !ml-2">5 days ago</p>
              </div>
              <div className="mt-4">
                <p className="text-slate-600 text-[15px] leading-relaxed">
                  Very impressed by the quality and speed. It’s rare to see this
                  level of dedication these days. I’ll definitely be coming
                  back.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-300 mt-6 pt-6 flex justify-center max-w-3xl mx-auto">
        <Pagination className="pb-6">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
