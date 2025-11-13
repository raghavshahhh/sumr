import './globals.css'

export const metadata = {
  title: 'Sumr - AI YouTube Summaries',
  description: 'Transform YouTube videos into smart summaries with AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}