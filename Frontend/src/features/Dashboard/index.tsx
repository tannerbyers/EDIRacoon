import { Container } from '@cloudscape-design/components'

function Dashboard() {
  return <Container fitHeight>
    <p className="p-4 text-4xl font-semibold">Dashboard</p>
    <div className="flex">
      <div className="w-1/3 p-4 font-semibold text-gray-600 border rounded-lg shadow" >You must setup an integration to begin viewing data! Click here to setup your first integration!</div>
    </div>
  </Container>
}

export default Dashboard
