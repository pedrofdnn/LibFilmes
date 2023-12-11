import { useState } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  // Implementação da UI da paginação
  return (
    <div>
      {/* UI da paginação aqui */}
    </div>
  );
}

export default function PagesComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Valor hipotético

  function handlePageChange(newPage: number) {
    // Lógica para carregar dados da nova página
    setCurrentPage(newPage);
  }

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button key={page} onClick={() => handlePageChange(page)}>
          {page}
        </button>
      ))}
    </div>
  );
}
