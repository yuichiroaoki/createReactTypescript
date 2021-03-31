import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Counter } from "./Counter";
// import {TextField} from "./Example";

export default function Contents() {
  return (
    <Container>
      <Typography>
        Hello
      </Typography>
      <Counter>
        {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
      {/* <TextField /> */}
    </Container>
  );
}