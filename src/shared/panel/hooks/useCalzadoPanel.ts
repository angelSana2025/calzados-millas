import { useMemo, useState } from "react";
import type { AddProductFormData, StockRow } from "../types";

type UseCalzadoPanelArgs = {
  rows: StockRow[];
  inventoryTitle: string;
  onAddProduct?: (data: AddProductFormData) => void;
  onEditProduct?: (id: number, data: AddProductFormData) => void;
  onDeleteProduct?: (id: number) => void;
};

export function useCalzadoPanel({
  rows,
  inventoryTitle,
  onAddProduct,
  onEditProduct,
  onDeleteProduct,
}: UseCalzadoPanelArgs) {
  const canMutate = !!onAddProduct;
  const allRows = rows;

  const [selectedRow, setSelectedRow] = useState<StockRow | null>(null);
  const [modalMode, setModalMode] = useState<{ mode: "add" } | { mode: "edit"; row: StockRow } | null>(
    null,
  );
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [seasonFilter, setSeasonFilter] = useState<string | null>(null);
  const [lowStockFilter, setLowStockFilter] = useState(false);

  const totalPairs = allRows.reduce((sum, row) => sum + row.totalPairs, 0);
  const lowStock = allRows.filter((row) =>
    [row.size1.qty, row.size2.qty, row.size3.qty].some((qty) => qty <= 2),
  ).length;
  const needsBuy = allRows.filter((row) =>
    [row.size1.qty, row.size2.qty, row.size3.qty].some((qty) => qty <= 1),
  ).length;
  const inventoryValue = allRows.reduce((sum, row) => sum + row.totalPairs * 100.44, 0);

  const filteredRows = useMemo(() => {
    let result = allRows;
    if (seasonFilter) {
      result = result.filter((row) => row.season === seasonFilter);
    }
    if (lowStockFilter) {
      result = result.filter((row) =>
        [row.size1.qty, row.size2.qty, row.size3.qty].some((q) => q <= 2),
      );
    }
    return result;
  }, [allRows, seasonFilter, lowStockFilter]);

  const handleAddSubmit = (data: AddProductFormData) => {
    if (modalMode?.mode === "edit" && onEditProduct) {
      onEditProduct(modalMode.row.id, data);
    } else if (onAddProduct) {
      onAddProduct(data);
    }
    setModalMode(null);
  };

  const handleDeleteConfirm = (id: number) => {
    onDeleteProduct?.(id);
    setDeletingId(null);
  };

  const toggleSeasonFilter = () => {
    setSeasonFilter(seasonFilter === null ? (allRows[0]?.season ?? null) : null);
  };

  return {
    displayTitle: inventoryTitle,
    canMutate,
    filteredRows,
    selectedRow,
    deletingId,
    modalMode,
    seasonFilter,
    lowStockFilter,
    totalPairs,
    inventoryValue,
    lowStock,
    needsBuy,
    setSelectedRow,
    setModalMode,
    setDeletingId,
    setLowStockFilter,
    toggleSeasonFilter,
    handleAddSubmit,
    handleDeleteConfirm,
  };
}

export type CalzadoPanelViewProps = ReturnType<typeof useCalzadoPanel>;
