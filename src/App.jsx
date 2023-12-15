//import './App.css'
import { Flex, Card, Heading, Text, ScrollArea, Box } from '@radix-ui/themes';

import LineChart from './components/LineChart';

function App() {

  return (
    <>
      <Flex p="5" gap="3" style={{"flexWrap":"wrap"}}>
        <Card>
          <Heading color="accent">Test card</Heading>
          <Text>Like on TV but not like that</Text>
        </Card>
        <Card>
          <Heading >Test card</Heading>
          <Text>Like, those are cards for testing</Text>
        </Card>
        <Card>
          <Heading color="red">Test card</Heading>
          <Text>and these are tests for a card</Text>
        </Card>
      </Flex>
      <Box px="5" backgroundColor="royalblue">
        <Card>
      <ScrollArea >
        <LineChart style={{height: 300, width:1000}}/>
      </ScrollArea>
        </Card>
      </Box>
    </>
  )
}

export default App
