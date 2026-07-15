
export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/commandCenter',
      permanent: false,
    },
  }
}

const App = () => null

export default App