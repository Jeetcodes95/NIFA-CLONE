import './globals.css'


export const metadata = {
  title: "NIFA: Fine Art Classes, Hobby classes, Art Institute Delhi",
  description: "Fine Art Classes, Hobby classes, Art Institute Delhi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
