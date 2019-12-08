import typeDefs from './typeDefs';
import { GET_HELLO } from '../../apollo/queryes';

const resolvers = {
    Mutation: {
        changeHello: (_, { say }, { cache }) => {
            const data = cache.readQuery({ query: GET_HELLO });
            const newHello = {
                __typename: 'Hello',
                say,
            };  
            cache.writeQuery({ 
                query: GET_HELLO, 
                data: {
                    ...data,
                    hello: newHello,
                }
            });
            return newHello;
        },
    }
}

export { resolvers, typeDefs };