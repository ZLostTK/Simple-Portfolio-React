import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SkillsChart from './SkillsChart';

// Mock Chart.js components
vi.mock('react-chartjs-2', () => ({
  Bar: ({ data }: { data: { labels: string[]; datasets: Array<{ data: number[] }> } }) => (
    <div data-testid="bar-chart">
      {data.labels.map((label: string, index: number) => (
        <div key={label}>
          {label}: {data.datasets[0].data[index]}%
        </div>
      ))}
    </div>
  ),
  Doughnut: ({ data }: { data: { labels: string[]; datasets: Array<{ data: number[] }> } }) => (
    <div data-testid="doughnut-chart">
      {data.labels.map((label: string, index: number) => (
        <div key={label}>
          {label}: {data.datasets[0].data[index]}%
        </div>
      ))}
    </div>
  ),
  Radar: ({ data }: { data: { labels: string[]; datasets: Array<{ data: number[] }> } }) => (
    <div data-testid="radar-chart">
      {data.labels.map((label: string, index: number) => (
        <div key={label}>
          {label}: {data.datasets[0].data[index]}%
        </div>
      ))}
    </div>
  ),
}));

// Mock data for testing
const mockSkills = [
  { name: 'React', level: 90, category: 'Frontend', color: '#61dafb' },
  { name: 'TypeScript', level: 85, category: 'Language', color: '#3178c6' },
  { name: 'Node.js', level: 75, category: 'Backend', color: '#339933' },
  { name: 'CSS', level: 80, category: 'Styling', color: '#1572b6' },
];

describe('SkillsChart', () => {
  it('renders with title and description', () => {
    render(
      <SkillsChart
        skills={mockSkills}
        title="Mis Habilidades"
        description="Nivel de dominio en diferentes tecnologías"
      />
    );

    expect(screen.getByText('Mis Habilidades')).toBeInTheDocument();
    expect(screen.getByText('Nivel de dominio en diferentes tecnologías')).toBeInTheDocument();
  });

  it('renders without title and description', () => {
    render(<SkillsChart skills={mockSkills} />);

    expect(screen.queryByText('Mis Habilidades')).not.toBeInTheDocument();
    expect(screen.queryByText('Nivel de dominio en diferentes tecnologías')).not.toBeInTheDocument();
  });

  it('renders bar chart by default', () => {
    render(<SkillsChart skills={mockSkills} />);

    expect(screen.getByTestId('bar-chart')).toBeInTheDocument();
  });

  it('renders doughnut chart when type is specified', () => {
    render(<SkillsChart skills={mockSkills} type="doughnut" />);

    expect(screen.getByTestId('doughnut-chart')).toBeInTheDocument();
  });

  it('renders radar chart when type is specified', () => {
    render(<SkillsChart skills={mockSkills} type="radar" />);

    expect(screen.getByTestId('radar-chart')).toBeInTheDocument();
  });

  it('renders skills legend', () => {
    render(<SkillsChart skills={mockSkills} />);

    mockSkills.forEach((skill) => {
      expect(screen.getByText(skill.name)).toBeInTheDocument();
      expect(screen.getByText(`${skill.level}%`)).toBeInTheDocument();
    });
  });

  it('renders chart type selector', () => {
    render(<SkillsChart skills={mockSkills} />);

    expect(screen.getByText('Barras')).toBeInTheDocument();
    expect(screen.getByText('Dona')).toBeInTheDocument();
    expect(screen.getByText('Radar')).toBeInTheDocument();
  });

  it('displays skill data in chart', () => {
    render(<SkillsChart skills={mockSkills} />);

    expect(screen.getByText('React: 90%')).toBeInTheDocument();
    expect(screen.getByText('TypeScript: 85%')).toBeInTheDocument();
    expect(screen.getByText('Node.js: 75%')).toBeInTheDocument();
    expect(screen.getByText('CSS: 80%')).toBeInTheDocument();
  });
});
