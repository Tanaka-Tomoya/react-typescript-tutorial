import React, { FC, useState, useEffect } from 'react';
import { Button, Card, Statistic, Icon } from 'semantic-ui-react';

import './App.css';

const LIMIT = 60


const App: FC = () => {
  const [timeLeft, setTimeLeft] = useState(LIMIT);

  const reset = () => {
    setTimeLeft(LIMIT);
  }

  const tick = () => {
    setTimeLeft(prevTime => prevTime === 0 ? LIMIT : prevTime - 1)
  }

  useEffect(() => {
    const timerId = setInterval(tick, 1000);
    return () => clearInterval(timerId)
  }, [])

  return (
    <div className="container">
      <header>
        <h1>TIMER</h1>
      </header>
      <Card>
        <Statistic className="number-board">
          <Statistic.Label>time</Statistic.Label>
          <Statistic.Value>{timeLeft}</Statistic.Value>
        </Statistic>
        <Card.Content>
          <Button color="red" fluid onClick={reset}>
            <Icon name='redo'/>
            reset
          </Button>
        </Card.Content>
      </Card>
    </div>
  )
};

export default App;
