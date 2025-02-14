export default function DashboardLayout({
  children,
}: {
  children: React.ReactElement
}) {
  return (
    <html lang='en'>
      <body className='bg-gray-800 text-white/80'>{children}</body>
    </html>
  )
}
