import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DataTable } from './DataTable';

// Mock data for testing
const mockData = [
  { id: 1, name: 'React', level: 'Avanzado', category: 'Frontend' },
  { id: 2, name: 'TypeScript', level: 'Intermedio', category: 'Language' },
  { id: 3, name: 'Node.js', level: 'Básico', category: 'Backend' },
];

const mockColumns = [
  {
    accessorKey: 'name',
    header: 'Nombre',
  },
  {
    accessorKey: 'level',
    header: 'Nivel',
  },
  {
    accessorKey: 'category',
    header: 'Categoría',
  },
];

describe('DataTable', () => {
  it('handles empty data gracefully', () => {
    render(
      <DataTable
        columns={mockColumns}
        data={[]}
      />
    );

    expect(screen.getByText('0 de 0 resultados')).toBeInTheDocument();
  });

  it('renders with title and description when provided', () => {
    render(
      <DataTable
        columns={mockColumns}
        data={mockData}
        title="Skills Table"
        description="Lista de habilidades"
      />
    );

    expect(screen.getByText('Skills Table')).toBeInTheDocument();
    expect(screen.getByText('Lista de habilidades')).toBeInTheDocument();
  });

  it('renders without title and description when not provided', () => {
    render(
      <DataTable
        columns={mockColumns}
        data={mockData}
      />
    );

    expect(screen.queryByText('Skills Table')).not.toBeInTheDocument();
    expect(screen.queryByText('Lista de habilidades')).not.toBeInTheDocument();
  });

  it('shows search input', () => {
    render(
      <DataTable
        columns={mockColumns}
        data={mockData}
      />
    );

    expect(screen.getByPlaceholderText('Buscar...')).toBeInTheDocument();
  });

  it('shows result count for non-empty data', () => {
    render(
      <DataTable
        columns={mockColumns}
        data={mockData}
      />
    );

    expect(screen.getByText('3 de 3 resultados')).toBeInTheDocument();
  });

  it('renders with custom search key', () => {
    render(
      <DataTable
        columns={mockColumns}
        data={mockData}
        searchKey="category"
      />
    );

    expect(screen.getByPlaceholderText('Buscar...')).toBeInTheDocument();
  });

  it('renders basic structure without errors', () => {
    render(
      <DataTable
        columns={mockColumns}
        data={mockData}
      />
    );

    // Verificar que el componente se renderiza sin errores
    expect(screen.getByText('3 de 3 resultados')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Buscar...')).toBeInTheDocument();
  });
});
