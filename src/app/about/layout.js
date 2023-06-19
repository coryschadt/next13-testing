export default function AboutLayout({ children }) {
  return (
    <div style={{ borderWidth: 5, borderColor: 'red' }}>
      <h2>Child layout</h2>
      {children}
    </div>
  )
}
