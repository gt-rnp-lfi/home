import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GT-LFI',
  description: 'Official landing page of the GT-LFI Working Group, showcasing initiatives and research on Local File Inclusion vulnerabilities and defense strategies.',
  generator: 'GT-LFI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
