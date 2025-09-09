import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

const pretendard = localFont({
  src: './font/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '100과자사전',
  description: '신상 과자 백과사전',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pretendard.className}>
      <body
        className={`${pretendard.variable} mx-auto max-w-[1980px] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
