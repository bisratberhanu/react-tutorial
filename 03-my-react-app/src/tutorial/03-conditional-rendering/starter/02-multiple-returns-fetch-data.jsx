import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const user = await response.json();
        setUser(user);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h2>...Loading</h2>;
  }
  if (isError) {
    return <h2>there was an error</h2>;
  }

  const { id, login, avatar_url, bio } = user;
  return (
    <section>
      <h1>fetch data </h1>

      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={avatar_url}
        alt={user.login}
      />
      <h2>{login}</h2>
      <p>{bio}</p>
    </section>
  );
};

export default MultipleReturnsFetchData;
