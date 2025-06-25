import Button from '../components/utilities/Button'

const NotFound = () => {
  return (
     <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-16">
      <h1 className="text-[100px]  font-bold mb-4 text-[var(--text-primary)]">404</h1>
      <p className="text-xl mb-6">Oops! The page you are looking for does not exist.</p>
      <Button href="/">Go back home</Button>
    </div>
  )
}

export default NotFound
