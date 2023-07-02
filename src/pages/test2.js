// Step 1: Import React
import * as React from 'react'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  )
}

const samplePageLinks = [
    {
      text: "test",
      url: "test",
      badge: false,
      description:
        "A simple example of linking to another page within a Gatsby site",
    },
    { text: "TypeScript", url: "using-typescript" },
    { text: "Server Side Rendering", url: "using-ssr" },
    { text: "Deferred Static Generation", url: "using-dsg" },
  ]
// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage
