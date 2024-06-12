interface BarDataItem {
  Year: string
  Rent: number
  Food: number
  Play: number
  Surplus: number
}

const barData: BarDataItem[] = [
  {
    Year: '2022',
    Rent: 72,
    Food: 48,
    Play: 80,
    Surplus: 50
  },
  {
    Year: '2023',
    Rent: 96,
    Food: 72,
    Play: 50,
    Surplus: 80
  },
  {
    Year: '2024',
    Rent: 120,
    Food: 108,
    Play: 30,
    Surplus: 30
  }
]

function calBarChartSource(data: BarDataItem[]): (string | number)[][] {
  const header: string[] = ['Year', 'Rent', 'Food', 'Play', 'Surplus']
  const barChartSource: (string | number)[][] = data.map(({ Year, Rent, Food, Play, Surplus }) => [
    Year,
    Rent,
    Food,
    Play,
    Surplus
  ])
  barChartSource.unshift(header)
  return barChartSource
}
const barChartSource: (string | number)[][] = calBarChartSource(barData)

export { barChartSource }
