export  default {
    data: {
      hello: {
        say: 'Hello world!',
        __typename: 'Hello', // важная штука без этого ничего корректно работать не будет 😌
      },
    }
  } 