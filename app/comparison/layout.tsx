import ComparisonLayout from '@/components/layouts/ComparisonLayout'

export const metadata = {
  title: 'Косми | Сравнение товаров',
}

export default function ComparisonRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ComparisonLayout>{children}</ComparisonLayout>
}
