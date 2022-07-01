import { gql, useQuery } from "@apollo/client";

const GET_CLIENTS = gql`
  query getClients {
    clients {
      name
      email
      phone
      id
    }
  }
`;

export default function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <h1>⏳ ⏳ ⏳</h1>;
  if (error) return <h1>😵 😵 😵</h1>;
  return <>{!loading && !error && <h1>CLIENTS! </h1>}</>;
}
