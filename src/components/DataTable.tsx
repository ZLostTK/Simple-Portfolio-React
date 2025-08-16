import React, { useState, useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
  ColumnDef,
  SortingState,
  ColumnFiltersState,
} from '@tanstack/react-table';
import { motion } from 'framer-motion';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchKey?: string;
  title?: string;
  description?: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  searchKey,
  title,
  description,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
  });

  const filteredData = useMemo(() => {
    if (!globalFilter) return data;

    return data.filter((item: Record<string, unknown>) => {
      if (searchKey && item[searchKey]) {
        return item[searchKey]
          ?.toString()
          .toLowerCase()
          .includes(globalFilter.toLowerCase());
      }

      // Búsqueda global en todas las propiedades
      return Object.values(item).some((value: unknown) =>
        value?.toString().toLowerCase().includes(globalFilter.toLowerCase())
      );
    });
  }, [data, globalFilter, searchKey]);

  return (
    <div className="space-y-4">
      {/* Header */}
      {(title || description) && (
        <div className="text-center mb-6">
          {title && (
            <h3 className="text-2xl font-bold text-dark-100 mb-2">{title}</h3>
          )}
          {description && (
            <p className="text-dark-300 max-w-2xl mx-auto">{description}</p>
          )}
        </div>
      )}

      {/* Search */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <input
            placeholder="Buscar..."
            value={globalFilter ?? ''}
            onChange={event => setGlobalFilter(event.target.value)}
            className="px-3 py-2 border border-dark-600 rounded-lg bg-dark-700 text-dark-100 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div className="text-sm text-dark-400">
          {filteredData.length} de {data.length} resultados
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg border border-dark-600 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-dark-800/50 border-b border-dark-600">
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th
                      key={header.id}
                      className="px-6 py-3 text-left text-xs font-medium text-dark-300 uppercase tracking-wider cursor-pointer hover:bg-dark-700/50 transition-colors"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <div className="flex items-center space-x-1">
                        {header.column.columnDef.header ? (
                          flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )
                        ) : (
                          <span>Header</span>
                        )}
                        {header.column.getCanSort() && (
                          <span className="text-primary-400">
                            {{
                              asc: '↑',
                              desc: '↓',
                            }[header.column.getIsSorted() as string] ?? '↕'}
                          </span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="bg-dark-800/30 divide-y divide-dark-600">
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row, index) => (
                  <motion.tr
                    key={row.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-dark-700/30 transition-colors"
                  >
                    {row.getVisibleCells().map(cell => (
                      <td
                        key={cell.id}
                        className="px-6 py-4 whitespace-nowrap text-sm text-dark-200"
                      >
                        {cell.column.columnDef.cell ? (
                          flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )
                        ) : (
                          <span>{String(cell.getValue())}</span>
                        )}
                      </td>
                    ))}
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="px-6 py-4 text-center text-dark-400"
                  >
                    No se encontraron resultados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-3 py-2 text-sm border border-dark-600 rounded-lg bg-dark-700 text-dark-300 hover:bg-dark-600 hover:text-dark-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Anterior
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-3 py-2 text-sm border border-dark-600 rounded-lg bg-dark-700 text-dark-300 hover:bg-dark-600 hover:text-dark-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Siguiente
          </button>
        </div>

        <div className="flex items-center space-x-2 text-sm text-dark-400">
          <span>Página</span>
          <strong>
            {table.getState().pagination.pageIndex + 1} de{' '}
            {table.getPageCount()}
          </strong>
        </div>
      </div>
    </div>
  );
}
