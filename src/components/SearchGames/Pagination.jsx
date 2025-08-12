export function Pagination({ currentPage, totalPages, onPageChange }) {
  const renderPageButtons = () => {
    const buttons = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    if (startPage > 1) {
      buttons.push(<button key={1} onClick={() => onPageChange(1)}>1</button>);
      if (startPage > 2) buttons.push(<span key="start-ellipsis">...</span>);
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button key={i} onClick={() => onPageChange(i)} disabled={i === currentPage}>
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) buttons.push(<span key="end-ellipsis">...</span>);
      buttons.push(<button key={totalPages} onClick={() => onPageChange(totalPages)}>{totalPages}</button>);
    }

    return buttons;
  };

  return (
    <div className="pagination-controls">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        Anterior
      </button>
      {renderPageButtons()}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Próximo
      </button>
    </div>
  );
}
