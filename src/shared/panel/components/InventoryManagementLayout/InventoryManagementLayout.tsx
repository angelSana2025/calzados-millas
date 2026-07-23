import type { ReactNode } from "react";
import { useInventoryManagementLayout } from "../../hooks/useInventoryManagementLayout";
import type { StockRow } from "../../types";
import { InventoryManagementLayoutView } from "./InventoryManagementLayout.view";

type InventoryManagementLayoutProps = {
  title: string;
  rows: StockRow[];
  children?: ReactNode;
  noFooter?: boolean;
};

/** Contenedor smart: conecta useInventoryManagementLayout con la vista pura. */
export function InventoryManagementLayout(props: InventoryManagementLayoutProps) {
  const layout = useInventoryManagementLayout();
  return <InventoryManagementLayoutView {...props} {...layout} />;
}
