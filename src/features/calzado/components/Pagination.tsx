import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
};

export function Pagination({ currentPage, totalPages, totalCount, pageSize, onPageChange }: Props) {
  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, totalCount);

  function getPages(): (number | "ellipsis")[] {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages: (number | "ellipsis")[] = [1];
    if (currentPage > 3) pages.push("ellipsis");
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push("ellipsis");
    pages.push(totalPages);
    return pages;
  }

  const pages = getPages();

  return (
    <div className="px-6 py-6 border-t border-[#E5E7EB] flex items-center justify-between bg-[#FFF0F6]">
      <p className="text-[12px] text-[#544245]">
        Mostrando <span className="font-bold text-[#251721]">{start} - {end}</span> de{" "}
        <span className="font-bold text-[#251721]">{totalCount}</span> productos
      </p>

      <div className="flex items-center gap-2">
        <button
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#E5E7EB] text-[#544245] hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex gap-1">
          {pages.map((p, i) =>
            p === "ellipsis" ? (
              <span key={`ellipsis-${i}`} className="w-10 h-10 flex items-center justify-center text-[#867275]">
                ...
              </span>
            ) : (
              <button
                key={p}
                onClick={() => onPageChange(p)}
                className={
                  "w-10 h-10 flex items-center justify-center rounded-lg transition-all font-medium " +
                  (p === currentPage
                    ? "bg-[#984258] text-white shadow-sm"
                    : "hover:bg-white border border-transparent hover:border-[#E5E7EB] text-[#544245]")
                }
              >
                {p}
              </button>
            )
          )}
        </div>

        <button
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#E5E7EB] text-[#544245] hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
